const router = require('express').Router();
const auth = require('../modules/auth');

let User = require('../models/user.model');
let Order = require('../models/order.model');

router.route('/:auth').get((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                User.find()
                .then(users => {
                    for (u = 0; u < users.length; u++) {
                        users[u].password = "-";
                        users[u].auth = "-";
                    }
                    res.json(users);
                })
                .catch(err => {
                    res.status(400).json('Err: '+err)
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba oprávnění!');
    }
});

router.route('/register').post((req, res) => {
    User.findOne({email: req.body.email})
    .then(foundUser => {
        if (!foundUser) {
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
                        res.cookie('authToken', savedUser.auth, { maxAge: 60*60*1000*5 });
                        res.json({ message: 'Uživatel zaregistrován!', authToken: userObject.auth, userID: savedUser._id, orderID: savedOrder._id});
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
        } else res.json("Uživatel s "+req.body.email+" již existuje!");
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
});

router.route('/login').put((req, res) => {
    if (req.body.email) {
        User.findOne({email: req.body.email})
        .then(foundUser => {
            if (foundUser) {
                if (!foundUser.deactivated) {
                    auth.comparePasswords(req.body.password, foundUser.password)
                    .then(passwordsMatch => {
                        if (passwordsMatch) {
                            foundUser.auth = auth.generateString(32);
                            foundUser.save()
                            .then(savedUser => {
                                res.cookie('authToken', savedUser.auth, { maxAge: 60*60*1000*5 });
                                res.json({message: 'Přihlášen!', authToken: savedUser.auth});
                            })
                            .catch(err => {
                                res.status(400).json('Err: '+err);
                            });
                        } else res.json('Špatný email nebo heslo!');
                    }).catch(err => {
                        res.status(400).json('Err: '+err);
                    });
                } else res.json('Účet deaktivován!');
            } else res.json('Špatný email nebo heslo!');
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    }
});


router.route('/info/:auth').get((req, res) => {
    if (req.params.auth) {
        auth.getUserID(req.params.auth, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            User.findById(userID)
            .then(foundUser => {
                foundUser.password = "-";
                foundUser.auth = "-";
                res.json(foundUser);
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    } else res.json('Je vyžadováno přihlášení!');
});

router.route('/deactivate/:auth').delete((req, res) => {
    if (req.params.auth) {
        auth.getUserID(req.params.auth, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            User.findById(userID)
            .then(foundUser => {
                foundUser.deactivated = true;
                foundUser.auth = '';
                foundUser.email = '';
                foundUser.save()
                .then(savedUser => {
                    res.json('Účet deaktivován!');
                })
                .catch(err => {
                    res.status(400).json('Err: '+err);
                });
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    }
});


module.exports = router;