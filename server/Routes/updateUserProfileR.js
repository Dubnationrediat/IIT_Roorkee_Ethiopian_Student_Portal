const express = require('express')
const  userUserProfileC = require('../controllers/updateUserProfile.js')


let userProfileRoute = express.Router()

userProfileRoute.post('/updateUserProfile/:id',userUserProfileC);


module.exports = userProfileRoute