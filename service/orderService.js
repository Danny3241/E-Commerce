const Order = require('../models/order')

const createOrder = async (order) => {
    return (await Order.create(order))
}

const getAllOrder = async () => {
    return await Order.find().populate('orderItem')
}

const getOrderById = async (id) => {
    return await Order.findById(id).populate('orderItem')
}

const updateOrder = async (id, order) => {
    return await Order.findByIdAndUpdate(id, order)
}

// const updateStatus = async (id, order) => {
//     return await Order.findByIdAndUpdate(id, order)
// }

const deleteOrder = async (id) => {
    return await Order.findByIdAndDelete(id)
}

module.exports = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
    // updateStatus
}