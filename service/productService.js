const Product = require('../models/product')

const createProduct = async (product) => {
    console.log(product)
    return await Product.create(product)
}

const getAllProduct = async () => {
    return await Product.find()
}

const getProductById = async (id) => {
    return await Product.findById(id)
}

const updateProduct = async (id, product) => {
    return await Product.findByIdAndUpdate(id, product)
}

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id)
}

module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct
}