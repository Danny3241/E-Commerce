const User = require('../models/user')

const createUser = async (user) => {
    console.log(property)
    return await Property.create(property)
}

const getUser = async(user)=>{
    return await Property.findOne(user)
}

const getAllProperty = async () => {
    return await Property.find()
}

const getPropertyById = async (id) => {
    return await Property.findById(id)
}

const updateProperty = async (id, property) => {
    return await Property.findByIdAndUpdate(id, property)
}

const deleteProperty = async (id) => {
    return await Property.findByIdAndDelete(id)
}

module.exports = {
    createProperty,
    getUser,
    getAllProperty,
    getPropertyById,
    updateProperty,
    deleteProperty
}