const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    weight: { type: Number, default: 0},
    content: { type: String, default: ''},
    caffeine: { type: Number, default: 0},
    flavor: { type: String, default: ''},
    czflavor: {type: String, default: ''},
    strength: { type: Number, default: -1},
    size: { type: String, default: ''},
    
    img: { type: String, default: '' },
    enabled: { type: Boolean, default: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Item', itemSchema);