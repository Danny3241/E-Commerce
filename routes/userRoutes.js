const express = require("express");
 
const {
    createUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controller/userControl');

const router = express.Router();

router.route('/').post(createUser);
router.route('/').get(getAllUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;