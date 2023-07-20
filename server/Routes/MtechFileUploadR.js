const express = require('express')
const MtechMulter = require('../middleware/forMtech.js')
const uploadMtechFile = require('../controllers/MtechFileUploadC.js')



let MtechFileUploadR = express.Router()

MtechFileUploadR.post('/mtechUpload',MtechMulter,uploadMtechFile)


module.exports=MtechFileUploadR