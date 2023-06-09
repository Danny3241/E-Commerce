const OrderItem = require('../models/orderItem')

const createOrderItem= async (orderItem) => {
    return await OrderItem.create(orderItem)
}

const getAllOrderItem = async () => {
    return await OrderItem.find()
}

const getOrderItemById = async (id) => {
    return await OrderItem.findById(id)
}

const updateOrderItem = async (id, orderItem) => {
    return await OrderItem.findByIdAndUpdate(id, orderItem)
}

const deleteOrderItem = async (id) => {
    return await OrderItem.findByIdAndDelete(id)
}

module.exports = {
    createOrderItem,
    getAllOrderItem,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem
}