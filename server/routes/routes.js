const express = require('express')
const app = express.Router()
const controller = require('../controller/controller')
const store = require('../middleware/multer')

//routes
app.get('*',controller.home)
app.post('/uploadmultiple',store.array('images',12),controller.uploads)

module.exports = app