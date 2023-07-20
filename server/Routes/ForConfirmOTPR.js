
const express = require('express')
const ForConfirmOTP = require('../controllers/ForConfirmOTP.js')


let confirmOTP = express.Router();

confirmOTP.post('/ForNewPasswordOTP',ForConfirmOTP);




module.exports = confirmOTP
