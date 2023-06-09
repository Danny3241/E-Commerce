const orderService = require('../service/orderService');
const orderItemService = require('../service/orderItemService');

const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder({
            orderItem: req.body.orderItem,
            shippingAddress1: req.body.shippingAddress1,
            shippingAddress2: req.body.shippingAddress2,
            city: req.body.city,
            zip: req.body.zip,
            country: req.body.country,
            phone: req.body.phone,
            // status: req.body.status,
            user: req.body.user,
        })
        res.json({ data: order, status: 'success' })
        await orderItemService.deleteOrderItem(req.body.orderItem)

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getAllOrder = async (req, res) => {
    try {
        const order = await orderService.getAllOrder()
        res.json({ data: order, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getOrderById = async (req, res) => {
    try {
        const order = await orderService.getOrderById(req.params.id)
        res.json({ data: order, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateOrder = async (req, res) => {
    try {
        const order = await orderService.updateOrder(req.params.id, req.body)
        res.json({ data: order, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateStatus = async (req, res) => {
    try {
        let status = req.body.status
        console.log(status);
        const order = await orderService.updateOrder(req.params.id, status)
        res.json({ data: order, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteOrder = async (req, res) => {
    try {
        const order = await orderService.deleteOrder(req.params.id)
        res.json({ data: order, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}



module.exports = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
    updateStatus
}