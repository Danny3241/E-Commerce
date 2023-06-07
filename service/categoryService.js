const Category = require('../models/category')

const createCategory = async (category) => {
    console.log(category)
    return await Category.create(category)
}

const getAllCategory = async () => {
    return await Category.find()
}

const getCategoryById = async (id) => {
    return await Category.findById(id)
}

const updateCategory = async (id, category) => {
    return await Category.findByIdAndUpdate(id, category)
}

const deleteCategory = async (id) => {
    return await Category.findByIdAndDelete(id)
}

module.exports = {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
}