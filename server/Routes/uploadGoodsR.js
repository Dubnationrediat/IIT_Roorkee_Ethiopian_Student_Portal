
const express = require('express')
const  forGoods =require('../middleware/forgoodspic.js')
const  uploadGoodsFile = require( '../controllers/uploadgoodsC.js')
const  {deleteGoods} = require('../Resources/goodsPicture/deleteGoods.js')
const {getYourSingleGoods} = require('../controllers/updateDeleteEka.js')


let goodsFileUploadR = express.Router()

goodsFileUploadR.post('/uploadGoods',forGoods,uploadGoodsFile)
goodsFileUploadR.delete('/deleteUserGoods/:id',deleteGoods)
goodsFileUploadR.get('/getUserGoods/:userInfo_ID',getYourSingleGoods)


module.exports = goodsFileUploadR