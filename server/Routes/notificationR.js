const express = require('express')
const {notificationC,getYourNotfication,deleteNotification,getAllNotfication} = require('../controllers/notificationC.js')
const {protect} = require('../controllers/aut.js')

// import {notificationC,deleteNotification,getAllNotfication} from '../controllers/notificationC.js'


let notificationRoute = express.Router();

notificationRoute.post('/notification',notificationC)
notificationRoute.get('/getUserNotfication/:userInfo_ID',getYourNotfication)
notificationRoute.get('/getAllNotfication',getAllNotfication)
notificationRoute.delete('/deleteUserNotfication/:id',deleteNotification)


module.exports=notificationRoute