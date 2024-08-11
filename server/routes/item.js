const router = require('express').Router();
let Item = require('../models/item.model');

const auth = require('../modules/auth');

router.route('/').get((req, res) => {
    Item.find({ enabled: true })
    .then(items => {
        res.json(items);
    })
    .catch(err => {
        res.status(400).json('Err: '+err)
    });
});

router.route('/add/:auth').post((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                const itemObject = {
                    name: req.body.name,
                    description: req.body.description,
                    price: req.body.price,
                    amount: req.body.amount,
                    weight: req.body.weight,
                    content: req.body.content,
                    caffeine: req.body.caffeine,
                    flavor: req.body.flavor,
                    strength: req.body.strength,
                    size: req.body.size,
                    img: req.body.img,
                    enabled: true
                }
                const newItem = new Item(itemObject);
                newItem.save()
                .then(savedItem => {
                    res.json({ message: 'Položka přidána!', itemID: savedItem._id });
                })
                .catch(err => {
                    res.status(400).json('Err: '+err);
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
                console.log("Asi ne")
                return;
            }
        }); 
    } else {
        res.json('Je vyžadováno přihlášení!');
    }
    
});


router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
    .then(foundItem => {
        res.json(foundItem);
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
});

router.route('/:id/:auth').delete((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                Item.findByIdAndDelete(req.params.id)
                .then(() => {
                    res.json('Položka byla smazána!');
                })
                .catch(err => {
                    res.status(400).json('Err: '+err);
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba oprávnění!');
    }
});

router.route('/update/:id/:auth').put((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                Item.findById(req.params.id)
                .then(foundItem => {
                    foundItem.name = req.body.name ? req.body.name : foundItem.name;
                    foundItem.description = req.body.description ? req.body.description : foundItem.description;
                    foundItem.price = req.body.price ? req.body.price : foundItem.price;
                    foundItem.weight = req.body.weight ? req.body.weight : foundItem.weight;
                    foundItem.content = req.body.content ? req.body.content : foundItem.content;
                    foundItem.caffeine = req.body.caffeine ? req.body.caffeine : foundItem.caffeine;
                    foundItem.flavor = req.body.flavor ? req.body.flavor : foundItem.flavor;
                    foundItem.strength = req.body.strength ? req.body.strength : foundItem.strength;
                    foundItem.size = req.body.size ? req.body.size : foundItem.size;
                    foundItem.save()
                    .then(() => {
                        res.json('Položka byla aktualizována!');
                    })
                    .catch(err => {
                        res.status(400).json('Err: '+err);
                    });
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba oprávnění!');
    }
});

router.route('/enable/:id/:auth').put((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                Item.findById(req.params.id)
                .then(foundItem => {
                    foundItem.enabled = true;
                    foundItem.save()
                    .then(() => {
                        res.json('Položka je dostupná!');
                    })
                    .catch(err => {
                        res.status(400).json('Err: '+err);
                    });
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba oprávnění!');
    }
});

router.route('/disable/:id/:auth').put((req, res) => {
    if (req.params.auth) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                Item.findById(req.params.id)
                .then(foundItem => {
                    foundItem.enabled = false;
                    foundItem.save()
                    .then(() => {
                        res.json('Položka je nedostupná!');
                    })
                    .catch(err => {
                        res.status(400).json('Err: '+err);
                    });
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba oprávnění!');
    }
});

router.route('/amount/:id/:auth').put((req, res) => {
    if (req.params.auth && req.params.id) {
        auth.isManager(req.params.auth, permission => {
            if (permission) {
                Item.findById(req.params.id)
                .then(foundItem => {
                    foundItem.amount = req.body.amount;
                    foundItem.save()
                    .then(() => {
                        res.json('Počet se změnil na '+req.body.amount+'!');
                    })
                    .catch(err => {
                        res.status(400).json('Err: '+err);
                    });
                });
            } else {
                res.json('Pro tento task je potřeba oprávnění!');
            }
        });
    } else {
        res.json('Pro tento task je potřeba více paramentrů!');
    }
});

module.exports = router;