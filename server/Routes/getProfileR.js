const express = require('express')
const userProfile = require('../controllers/getProfile.js')

let userPrileR= express.Router()
userPrileR.get('/me',userProfile)


module.exports = userPrileR