const orderItemService = require('../service/orderItemService');

const createOrderItem = async (req, res) => {
    try {
        console.log(req.file)
        const orderItem = await orderItemService.createOrderItem({
            name: req.body.name,
            //icon: req.body.icon,
            color: req.body.color
        })
        res.json({ data: orderItem, status: 'success' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllOrderItem = async (req, res) => {
    try {
        const orderItem = await orderItemService.getAllOrderItem()
        res.json({ data: orderItem, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getOrderItemById = async (req, res) => {
    try {
        const orderItem = await orderItemService.getOrderItemById(req.params.id)
        res.json({ data: orderItem, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateOrderItem = async (req, res) => {
    try {
        const orderItem = await orderItemService.updateOrderItem(req.params.id, req.body)
        res.json({ data: orderItem, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteOrderItem = async (req, res) => {
    try {
        const orderItem = await orderItemService.deleteOrderItem(req.params.id)
        res.json({ data: orderItem, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createOrderItem,
    getAllOrderItem,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem
}