const orderService = require('../service/orderService');

const createOrder = async (req, res) => {
    try {
        console.log(req.file)
        const order = await orderService.createOrder({
            orderItem: req.body.name,
            shippingAddress1: req.body.description,
            shippingAddress2: req.body.richDescription,
            city: req.body.image,
            zip: req.body.brand,
            country: req.body.price,
            phone: req.body.category,
            status: req.body.countInStock,
            totalPrice: req.body.rating,
            user: req.body.numReviews,
        })
        res.json({ data: order, status: 'success' })

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
    deleteOrder
}