const jwt = require('jsonwebtoken');
const userLogin = require('../models/userLogin');
const asyncHandler = require('express-async-handler');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, 'asdfghjklzsdxfghjkaSdfghjSzdxfghSzdxfghjsdfgh');
      req.user = await userLogin.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authirized! Token failed.');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized! No Token');
  }
});



module.exports = protect ;