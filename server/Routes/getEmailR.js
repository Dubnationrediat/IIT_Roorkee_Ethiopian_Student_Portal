const express = require('express')
const emailChecker = require('../controllers/regEmailC.js')


let emailCheck = express.Router();

emailCheck.get('/getSingleEmail',emailChecker);


module.exports = emailCheck