const express = require("express");
const upload = require("../middleware/uploads")
const {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct,
    deleteProduct,

} = require('../controller/productControl');

const router = express.Router();

router.route('/').post(upload.single('image'), createProduct);
router.route('/').get(getAllProduct);
router.route('/:id').get(getProductById);
router.route('/:id').put(updateProduct);
router.route('/:id').delete(deleteProduct);

module.exports = router;