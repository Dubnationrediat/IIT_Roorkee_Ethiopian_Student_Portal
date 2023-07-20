const express = require('express')
const updateNotificatioByAdmin = require('../controllers/adminUpdateNotificationC.js')
const updateEducationalByAdmin = require('../controllers/adminUpdatesEducationalC.js')
const updateGoodsByAdmin= require('../controllers/adminUpdateGoodsC.js')


let update = express.Router();

update.post('/adminUpdateNotification',updateNotificatioByAdmin)
update.post('/adminUpdateEducational',updateEducationalByAdmin)
update.post('/updateGoods',updateGoodsByAdmin)



module.exports = update