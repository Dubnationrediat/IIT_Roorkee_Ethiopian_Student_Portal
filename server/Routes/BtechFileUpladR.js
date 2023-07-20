const express = require("express");
const BtechMulter = require("../middleware/forBtech.js");
const uploadBtechFile = require("../controllers/BtechFileUploadC.js");

let BtechFileUploadR = express.Router();

BtechFileUploadR.post("/btechUpload", BtechMulter, uploadBtechFile);

module.exports = BtechFileUploadR;
