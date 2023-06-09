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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
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
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date, 
        default: Date.now 
    },
})



module.exports = mongoose.model("Product", productSchema);
