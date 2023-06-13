const express = require("express");

const {
    createDiscount,
    updateDiscount

} = require('../controller/discountControl');


const router = express.Router();

router.route('/discount').post(createDiscount);
router.route('/:id').put(updateDiscount);

module.exports = router;
