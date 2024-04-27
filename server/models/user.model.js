const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    auth: { type: String, default: '' },
    active: { type: Boolean, default: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);