const orderItemService = require('../service/orderItemService');
const service = require("../service/productService");
const discountService = require("../service/discountService")

const createOrderItem = async (req, res) => {
    try {
        let { quantity, product, user, discount } = req.body;
        const productdata = await service.getProductById(product);
        if (discount) {
            const discountdata = await discountService.getDiscountById(discount);
            const totalPrice = quantity * productdata.price;

            const discountPrice = discountdata.discount_rate / 100 * totalPrice

            const total = totalPrice - discountPrice

            const orderItem = await orderItemService.createOrderItem({
                quantity, product, total, user, discount
            })
            res.json({ data: orderItem, status: 'success' })
        } else {
            const total = quantity * productdata.price;
            const orderItem = await orderItemService.createOrderItem({
                quantity, product, total, user, discount
            })
            res.json({ data: orderItem, status: 'success' })
        }
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
        const orderData = await orderItemService.getOrderItemById(req.params.id);

        if (!orderData) {
            return res.status(401).json({ error: 'orderItem not found' })
        }
        const productData = await service.getProductById(orderData.product);
        const quantity = parseInt(req.body.quantity);
        const total = quantity * productData.price;
        const orderItem = await orderItemService.updateOrderItem(req.params.id, { quantity, total })
        res.json({ data: orderItem, status: 'success' })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteOrderItem = async (req, res) => {
    try {
        const orderData = await orderItemService.getOrderItemById(req.params.id);
        if (!orderData) {
            return res.status(401).json({ error: 'orderItem not found' })
        }
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