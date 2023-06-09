const express = require("express");
const upload = require("../middleware/uploads")
const {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,

} = require('../controller/categoryControl');

const router = express.Router();

router.route('/').post(upload.single('icon'), createCategory);
router.route('/').get(getAllCategory);
router.route('/:id').get(getCategoryById);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);

module.exports = router;