const router = require('express').Router();

const auth = require('../modules/auth');

let Cart = require('../models/cart.model');
let Order = require('../models/order.model');
let Item = require('../models/item.model');

router.route('/:auth').get((req, res) => {
    if (req.params.auth) {
        auth.getUserID(req.params.auth, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            Cart.find({ userID: userID })
            .then(foundCart => {
                res.json(foundCart);
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    } else {
        res.json('Je vyžadováno přihlášení!');
    }
});

router.route('/add/:auth').put((req, res) => {
    if (req.params.auth) {
        auth.getUserID(req.params.auth, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
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
                        if (!foundCart) {
                            if (req.body.amount > foundItem.amount) {
                                res.json('Poslední '+foundItem.amount+' dostupné!');
                            } else {
                                const newCart = new Cart(cartObject);
                                newCart.save()
                                .then(savedCart => {
                                    res.json('Položka přidána do košíku, aktuální počet: '+savedCart.amount);
                                })
                                .catch(err => {
                                    res.status(400).json('Err: '+err);
                                });
                            }
                        } else {
                            if (Number(req.body.amount)+foundCart.amount > foundItem.amount) {
                                res.json('Poslední '+foundItem.amount+' dostupné!');
                            } else {
                                foundCart.amount += Number(req.body.amount);
                                foundCart.save()
                                .then(savedCart => {
                                    res.json('Položka přidána do košíku v počtu: '+savedCart.amount);
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
        res.json('Je vyžadováno přihlášení!');
    }
});


router.route('/delete/:auth').put((req, res) => {
    if (req.params.auth) {
        auth.getUserID(req.params.auth, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                Cart.findOne({ orderID: foundOrder._id, userID: userID, itemID: req.body.itemID })
                .then(foundCart => {
                    if (!foundCart) {
                        return res.status(404).json('Položka nenalezena v košíku');
                    }

                    if (foundCart.amount <= req.body.amount) {
                        foundCart.deleteOne()
                        .then(() => {
                            res.json('Položka smazána z košíku');
                        })
                        .catch(err => {
                            res.status(400).json('Error: ' + err);
                        });
                    } else {
                        foundCart.amount -= Number(req.body.amount);
                        foundCart.save()
                        .then(savedCart => {
                            res.json('Počet položek v košíku byl aktualizován, nový počet je: ' + savedCart.amount);
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
        res.json('Je vyžadováno přihlášení!');
    }
});


module.exports = router;