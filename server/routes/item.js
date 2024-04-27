const router = require('express').Router();
let Item = require('../models/item.model');

router.route('/').get((req, res) => {
    Item.find()
    .then(items => {
        res.json(items);
    })
    .catch(err => {
        res.status(400).json('Err: '+err)
    });
});

router.route('/add').post((req, res) => {
    const itemObject = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        amount: req.body.amount,
        active: true
    }
    const newItem = new Item(itemObject);
    newItem.save()
    .then(savedItem => {
        res.json({ message: 'Item added!', itemID: savedItem._id });
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
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

router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
    .then(() => {
        res.json('Item deleted!');
    })
    .catch(err => {
        res.status(400).json('Err: '+err);
    });
});

router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(foundItem => {
        foundItem.name = req.body.name ? req.body.name : foundItem.name;
        foundItem.description = req.body.description ? req.body.description : foundItem.description;
        foundItem.price = req.body.price ? req.body.price : foundItem.price;
        foundItem.save()
        .then(() => {
            res.json('Item updated!');
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    });
});

router.route('/enable/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(foundItem => {
        foundItem.enabled = true;
        foundItem.save()
        .then(() => {
            res.json('Item enabled!');
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    });
});

router.route('/disable/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(foundItem => {
        foundItem.enabled = false;
        foundItem.save()
        .then(() => {
            res.json('Item disabled!');
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    });
});

router.route('/amount/:id').post((req, res) => {
    Item.findById(req.params.id)
    .then(foundItem => {
        foundItem.amount = req.body.amount;
        foundItem.save()
        .then(() => {
            res.json('Amount changed to '+req.body.amount+'!');
        })
        .catch(err => {
            res.status(400).json('Err: '+err);
        });
    });
});

module.exports = router;