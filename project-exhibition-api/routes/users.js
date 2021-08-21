const express = require('express')
const router = express.Router();

let User = require('../controllers/userControllers');

router.post('/login', User.login);

module.exports = router;
