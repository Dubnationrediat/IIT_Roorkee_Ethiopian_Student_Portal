const express = require('express')
const {deletePhdDocument,deleteMtchDocument,deleteBtchDocument,deleteUserNotification,deleteUserGoods,deleteUserData,deleteUserEmail} = require ('../controllers/adminDeleteC.js')

let adminDeleteRoute = express.Router();

adminDeleteRoute.delete('/deletePhd/:id',deletePhdDocument)
adminDeleteRoute.delete('/deleteMtech/:id',deleteMtchDocument)
adminDeleteRoute.delete('/deleteBtech/:id',deleteBtchDocument)
adminDeleteRoute.delete('/deleteGoods/:id',deleteUserGoods)
adminDeleteRoute.delete('/deleteNotification/:id',deleteUserNotification)
adminDeleteRoute.delete('/deleteUserInfo/:id',deleteUserData)
adminDeleteRoute.delete('/deleteUserEmailOnly/:id',deleteUserEmail)


module.exports = adminDeleteRoute