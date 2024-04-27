const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    orderID: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    itemID: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
    amount: { type: Number, default: 1 }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Cart', cartSchema);