
const express = require('express')
const deleteProfieC = require("../controllers/DeleteC.js")

let DeleteRoute = express.Router();
DeleteRoute.delete('/deleteUser/:id',deleteProfieC)


module.exports = DeleteRoute