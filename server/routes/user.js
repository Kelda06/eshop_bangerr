const router = require('express').Router();
const auth = require('../modules/auth');

let User = require('../models/user.model');
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(400).json('Err: '+err)
    });
});

router.route('/register').post((req, res) => {
    auth.hashPassword(req.body.password)
    .then(hashedPassword => {
        const userObject = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: hashedPassword,
            auth: auth.generateString(32)
        }
        const newUser = new User(userObject);
        newUser.save()
        .then(savedUser => {
            const newOrder = new Order({ userID: savedUser._id });
            newOrder.save()
            .then(savedOrder => {
                res.cookie('authToken', savedUser.auth, { maxAge: 60*60*1000 });
                res.json({ message: 'User registered!', userID: savedUser._id, orderID: savedOrder._id});
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
});

router.route('/login').post((req, res) => {
    User.find()
    .then(users => {
        found = false;
        for (u = 0; u < users.length; u++) {
            if (users[u].email == req.body.email) {
                userID = users[u]._id;
                found = true;
                auth.comparePasswords(req.body.password, users[u].password)
                .then(passwordsMatch => {
                    if (passwordsMatch) {
                        User.findById(userID)
                        .then(foundUser => {
                            foundUser.auth = auth.generateString(32);
                            foundUser.save()
                            .then(savedUser => {
                                res.cookie('authToken', savedUser.auth, { maxAge: 60*60*1000*5 }); //5 hodin
                                res.json('Logged in!');
                            })
                            .catch(err => {
                                res.status(400).json('Err: '+err);
                            });
                        })
                        .catch(err => {
                            res.status(400).json('Err: '+err);
                        });
                    } else res.json('Wrong email or password!');
                })
            }
        }
        if (!found) {
            res.json('Wrong email or password!');
        }
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
});


router.route('/info').get((req, res) => {
    if (req.cookies.authToken) {
        auth.getUserID(req.cookies.authToken, userID => {
            User.findById(userID)
            .then(foundUser => {
                foundUser.password = '-';
                foundUser.auth = '-';
                res.json(foundUser)
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    }
});

module.exports = router;