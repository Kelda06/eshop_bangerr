const router = require('express').Router();

const auth = require('../modules/auth');

let Cart = require('../models/cart.model');
let Order = require('../models/order.model');
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    if (req.cookies.authToken) {
        auth.getUserID(req.cookies.authToken, userID => {
            Cart.find({ userID: userID })
            .then(foundCart => {
                res.json(foundCart);
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    } else {
        res.json('Login required!');
    }
});

router.route('/add').post((req, res) => {
    if (req.cookies.authToken) {
        auth.getUserID(req.cookies.authToken, userID => {
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                const cartObject = {
                    orderID: foundOrder._id,
                    userID: userID,
                    itemID: req.body.itemID,
                    amount: req.body.amount
                }
                Cart.findOne({ orderID: foundOrder._id, userID: userID, itemID: req.body.itemID })
                .then(foundCart => {
                    Item.findById(req.body.itemID)
                    .then(foundItem => {
                        console.log(foundItem);
                        if (!foundCart) {
                            if (req.body.amount > foundItem.amount) {
                                res.json('Last '+foundItem.amount+' available!');
                            } else {
                                const newCart = new Cart(cartObject);
                                newCart.save()
                                .then(savedCart => {
                                    res.json('Item added to card with amount: '+savedCart.amount);
                                })
                                .catch(err => {
                                    res.status(400).json('Err: '+err);
                                });
                            }
                        } else {
                            if (Number(req.body.amount)+foundCart.amount > foundItem.amount) {
                                res.json('Last '+foundItem.amount+' available!');
                            } else {
                                foundCart.amount += Number(req.body.amount);
                                foundCart.save()
                                .then(savedCart => {
                                    res.json('Item added to card with amount: '+savedCart.amount);
                                })
                                .catch(err => {
                                    res.status(400).json('Err: '+err);
                                });
                            }
                        }
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
    } else {
        res.json('Login required!');
    }
});


router.route('/delete').post((req, res) => {
    if (req.cookies.authToken) {
        auth.getUserID(req.cookies.authToken, userID => {
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                Cart.findOne({ orderID: foundOrder._id, userID: userID, itemID: req.body.itemID })
                .then(foundCart => {
                    if (!foundCart) {
                        return res.status(404).json('Item not found in the cart');
                    }

                    if (foundCart.amount <= req.body.amount) {
                        foundCart.deleteOne()
                        .then(() => {
                            res.json('Item deleted from cart');
                        })
                        .catch(err => {
                            res.status(400).json('Error: ' + err);
                        });
                    } else {
                        foundCart.amount -= Number(req.body.amount);
                        foundCart.save()
                        .then(savedCart => {
                            res.json('Item amount updated in cart, new amount: ' + savedCart.amount);
                        })
                        .catch(err => {
                            res.status(400).json('Error: ' + err);
                        });
                    }
                })
                .catch(err => {
                    res.status(400).json('Error: ' + err);
                });
            })
            .catch(err => {
                res.status(400).json('Error: ' + err);
            });
        });
    } else {
        res.json('Login required!');
    }
});


module.exports = router;