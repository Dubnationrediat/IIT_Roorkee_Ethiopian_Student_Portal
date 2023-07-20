
const tableCreator = require("../schema/userInfo.js")
const express = require ('express')


let tableRoute = express.Router();

tableRoute.get('/createTable',tableCreator)




module.exports = tableRoute
