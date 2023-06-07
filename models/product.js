const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    countInStock: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    numReviews: {
        type: String,
        required: true
    },
    isFeatured: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date, 
        default: Date.now 
    },
})



module.exports = mongoose.model("Product", productSchema);
