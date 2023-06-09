const express = require("express");
 
const {
    createOrderItem,
    getAllOrderItem,
    getOrderItemById,
    updateOrderItem,
    deleteOrderItem,

} = require('../controller/orderItemControl');

const router = express.Router();

router.route('/').post(createOrderItem);
router.route('/').get(getAllOrderItem);
router.route('/:id').get(getOrderItemById);
router.route('/:id').put(updateOrderItem);
router.route('/:id').delete(deleteOrderItem);

module.exports = router;