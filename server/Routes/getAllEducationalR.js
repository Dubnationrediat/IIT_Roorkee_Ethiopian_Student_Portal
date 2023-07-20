const express = require('express')
const {getAllEducationalDocMetch,getAllEducationalDocBtech,getAllEducationalDocPhd} = require('../controllers/getAllEducationalDocsC.js')

let getAllEduDocR = express.Router()

getAllEduDocR.get('/getBtechDoc',getAllEducationalDocBtech)
getAllEduDocR.get('/getMtechDoc',getAllEducationalDocMetch)
getAllEduDocR.get('/getPhdDoc',getAllEducationalDocPhd)


module.exports = getAllEduDocR
