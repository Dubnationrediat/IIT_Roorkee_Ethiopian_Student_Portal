const express = require('express')
const phdMulter = require('../middleware/forPhd.js')
const  uploadPhdFile = require('../controllers/phdFileUploadC.js')


let phdFileUploadR = express.Router()

phdFileUploadR.post('/phdUpload',phdMulter,uploadPhdFile)



module.exports = phdFileUploadR