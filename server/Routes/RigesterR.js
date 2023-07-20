const express = require('express')
const registerC = require('../controllers/RigesterC.js')



let registerRout = express.Router();

registerRout.post('/register',registerC)


module.exports =registerRout