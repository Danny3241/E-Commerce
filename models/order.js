const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true, 
    },
    shippingAddress1: {
        type: String
    },
    shippingAddress2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "pending"
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model("Order", orderSchema);
