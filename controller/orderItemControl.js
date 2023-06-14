const orderItemService = require('../service/orderItemService');
const service = require("../service/productService");
// const discountService = require ("../service/discountService")
const createOrderItem = async (req, res) => {
    try {
        let { quantity, product } = req.body;
        const productdata = await service.getProductById(product);
        // const discountdata = await discountService.create(discount);
        console.log("abc==>", productdata)
        let total = quantity * productdata.price;
        // let Total = total - discountdata.coupon_code
        const orderItem = await orderItemService.createOrderItem({
            quantity, product, total
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
        const productData = await service.getOrderItemById(req.body.product);
        console.log("Product Data:", productData);
        const quantity = parseInt(req.body.quantity);
        const total = quantity * productData.price;    
        const orderItem = await orderItemService.updateOrderItem(req.params.id, {quantity, total})
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