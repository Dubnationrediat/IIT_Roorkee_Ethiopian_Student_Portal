const express = require('express');
const getStudentInfo= require('../controllers/getStudentInfoC.js')

let getStudData = express.Router();

getStudData.get('/getStudentInfo',getStudentInfo)

module.exports = getStudData