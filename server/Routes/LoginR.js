const loginC= require("../controllers/loginC.js")
const express = require('express')

let loginRoute = express.Router();

loginRoute.post('/tologin',loginC)



module.exports=loginRoute