const express = require("express");
 
const {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,

} = require('../controller/orderControl');

const router = express.Router();

router.route('/').post(createOrder);
router.route('/').get(getAllOrder);
router.route('/:id').get(getOrderById);
router.route('/:id').put(updateOrder);
router.route('/:id').delete(deleteOrder);

module.exports = router;