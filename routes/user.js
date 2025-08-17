// for authntication and authorization
const express = require('express');
const router = express.Router();
const {UserSignup , UserLogin} = require('../controllers/user');

router.post('/' ,UserSignup); 
router.post('/login' ,UserLogin); 
module.exports = router;
