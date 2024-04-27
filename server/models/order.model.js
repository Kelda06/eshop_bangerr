const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    finalPrice: { type: Number, default: 0 },
    ordered: { type: Boolean, default: false },
    paid: { type: Boolean, default: false },
    finished: { type: Boolean, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);