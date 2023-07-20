const express = require('express')
const getAllGoods = require('../controllers/displayGoodsC.js')

let goodsShowerR = express.Router()
goodsShowerR.get('/getGoods',getAllGoods)


module.exports = goodsShowerR