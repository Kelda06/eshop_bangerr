const router = require('express').Router();
const auth = require('../modules/auth');

let Order = require('../models/order.model');
let Cart = require('../models/cart.model');
let Item = require('../models/item.model');
const itemModel = require('../models/item.model');
let functionRunning = false;

router.route('/').post((req, res) => {
    if (req.body.authToken) {
        auth.getUserID(req.body.authToken, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                res.json(foundOrder);
            })
            .catch(err => {
                res.status(400).json('Err: '+err);
            });
        });
    } else {
        res.json('Je vyžadováno přihlášení!');
    }
});

router.route('/detail').post((req, res) => {
    if (req.body.authToken) {
        auth.getUserID(req.body.authToken, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                Cart.find({ orderID: foundOrder._id })
                .then(foundCarts => {
                   
                    
                    allItems = [];
                    function findItems(iteration) {
                        functionRunning = true;
                        if (foundCarts[iteration]) {
                            Item.findById(foundCarts[iteration].itemID)
                            .then(foundItem => {
                               
                                allItems.push({
                                    name: foundItem.name,
                                    description: foundItem.description,
                                    price: foundItem.price,
                                    amount: foundCarts[iteration].amount,
                                    img: foundItem.img,
                                    itemID: foundCarts[iteration].itemID
                                });
                                findItems(iteration+1);
                            })
                            .catch(err => {
                                res.status(400).json('Err: '+err);
                            });
                        } else {
                          
                            
                            functionRunning = false;
                            res.json(allItems);
                        }
                    }
                    if (!functionRunning) findItems(0);
                    else res.json("Too much requests!");
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

router.route('/place').post((req, res) => {
    if (req.body.authToken) {
        auth.getUserID(req.body.authToken, userID => {
            if (!userID) {
                res.json('Je vyžadováno přihlášení!');
                return;
            }
            Order.findOne({ userID: userID, ordered: false })
            .then(foundOrder => {
                Cart.find({ orderID: foundOrder._id })
                .then(foundCarts => {
                    allItems = [];
                    errRes = [];
                    sumPrice = 0;
                    function findItems(iteration) {
                        functionRunning = true;
                        if (foundCarts[iteration]) {
                            Item.findById(foundCarts[iteration].itemID)
                            .then(foundItem => {
                                if (!foundItem.enabled) {
                                    errRes.push({
                                        itemID: foundCarts[iteration].itemID,
                                        enabled: false
                                    })
                                } else if (foundItem.amount < foundCarts[iteration].amount) {
                                    errRes.push({
                                        itemID: foundCarts[iteration].itemID,
                                        amount: foundItem.amount
                                    })
                                } else {
                                    allItems.push({
                                        name: foundItem.name,
                                        description: foundItem.description,
                                        price: foundItem.price,
                                        amount: foundCarts[iteration].amount,
                                        img: foundItem.img,
                                        itemID: foundCarts[iteration].itemID
                                    });
                                    sumPrice += foundItem.price*foundCarts[iteration].amount;
                                }
                                findItems(iteration+1);
                            })
                            .catch(err => {
                                res.status(400).json('Err: '+err);
                            });
                        } else {
                            if (!errRes.length) {
                                foundOrder.ordered = true;
                                foundOrder.finalPrice = sumPrice;
                                foundOrder.save()
                                .then(savedOrder => {
                                    const newOrder = new Order({ userID: userID });
                                    newOrder.save()
                                    .then(savedOrder => {
                                        function decreaseItemAmount(iteration) {
                                            if (foundCarts[iteration]) {
                                                Item.findById(foundCarts[iteration].itemID)
                                                .then(foundItem => {
                                                    foundItem.amount -= foundCarts[iteration].amount;
                                                    foundItem.save()
                                                    .then(savedItem => {
                                                        decreaseItemAmount(iteration+1);
                                                    })
                                                    .catch(err => {
                                                        res.status(400).json('Err: '+err);
                                                    });
                                                })
                                                .catch(err => {
                                                    res.status(400).json('Err: '+err);
                                                });
                                            } else {
                                                res.json({ message: 'Úspěšně objednáno!', finalPrice: sumPrice, allItems: allItems});
                                            }
                                        }
                                        decreaseItemAmount(0);
                                    })
                                    .catch(err => {
                                        res.status(400).json('Err: '+err);
                                    });
                                })
                                .catch(err => {
                                    res.status(400).json('Err: '+err);
                                });
                            } else {
                                res.json({ allItems: allItems, err: errRes });
                            }
                        }
                    }
                    if (!functionRunning) findItems(0);
                    else res.json("Too much requests!");
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

module.exports = router;