const phdPdfDawnloader = require('../controllers/phdPdfDawnloaderC.js')
const express = require('express')



let phdPdfSender = express.Router()
phdPdfSender.get('/download/:PhdFileName',phdPdfDawnloader)


module.exports=phdPdfDawnloader