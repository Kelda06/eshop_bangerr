const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
    img: { type: String, default: '' },
    enabled: { type: Boolean, default: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Item', itemSchema);