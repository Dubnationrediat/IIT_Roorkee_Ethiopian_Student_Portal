
const express = require('express')
const ForNewPassword = require('../controllers/ForNewPassword.js')


let forPasswordChange = express.Router()

forPasswordChange.post('/ForNewPassword',ForNewPassword)


module.exports = forPasswordChange