const express = require("express");
 
const {
    createCategory,
    getAllCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,

} = require('../controller/categoryControl');

const router = express.Router();

router.route('/').post(createCategory);
router.route('/').get(getAllCategory);
router.route('/:id').get(getCategoryById);
router.route('/:id').put(updateCategory);
router.route('/:id').delete(deleteCategory);

module.exports = router;