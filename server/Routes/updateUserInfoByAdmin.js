const express = require('express')
const adminUdateUserProfile = require('../controllers/adminUpdateUserProfile.js')

let updatedInformation = express.Router();

updatedInformation.post('/updateUserInfo',adminUdateUserProfile)


module.exports =updatedInformation