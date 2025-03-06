const express = require('express');
const app = require('../app');
const authController = require('../controller/auth');
const authcon = require('../controller/register');
const url = require('url');

const router = express.Router();
router.post('/register',authController.register);
router.post('/login',authController.login);
// router.get('/usersinfo',authController.register);
router.get('/api/v2',authcon.authApi);


module.exports = router;