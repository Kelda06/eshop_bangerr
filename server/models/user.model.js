const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'client' },
    auth: { type: String, default: '' },
    deactivated: { type: Boolean, default: false }
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', userSchema);