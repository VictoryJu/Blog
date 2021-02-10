const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/userController');

router.post('/login',UsersController.loginUser);

module.exports = router;