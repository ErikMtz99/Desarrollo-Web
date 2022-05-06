const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

router.post('/user', userController.login);

module.exports = router;