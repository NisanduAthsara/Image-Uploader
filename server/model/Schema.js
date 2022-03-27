const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
    filename:{
        type:String,
        required:true
    },
    contentType:{
        type:String,
        required:true
    },
    imageBase64:{
        type:String,
        required:true
    }
})

module.exports = UploadModel = mongoose.model('rest5',uploadSchema)