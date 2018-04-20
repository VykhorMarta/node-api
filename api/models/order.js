const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    price: Number
}, {versionKey: false});

module.exports = mongoose.model('Order', orderSchema, "Order")