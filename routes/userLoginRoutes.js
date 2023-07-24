const upload = require("../middleware/uploads");
const express = require("express");
const protect = require("../middleware/auth")

const {
    register,
    signIn
} = require('../controller/userLoginControl');

const router = express.Router();

router.route('/').post(register);
router.route('/login').post(signIn);

module.exports = router;