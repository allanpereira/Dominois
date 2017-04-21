const express = require('express');
const LoginController = require('../../../Controllers/LoginController');

const router = express.Router();

/* POST api/login */
router.post('/login', LoginController.post);

module.exports = router;