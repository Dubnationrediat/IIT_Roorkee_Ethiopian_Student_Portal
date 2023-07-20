const express = require("express")
const setNewPassWord = require("../controllers/setNewPassword.js")



let forNewPasswordUpdate = express.Router();

forNewPasswordUpdate.post("/setNewPassword", setNewPassWord);



module.exports=forNewPasswordUpdate