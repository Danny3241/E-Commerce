const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userLogin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserLogin',
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})



module.exports = mongoose.model("User", userSchema);

