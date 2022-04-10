const Schema = require('../model/Schema')
const fs = require('fs')

exports.home = async (req,res)=>{
    const all_images = await Schema.find()
    res.render('main',{images:all_images})
}

exports.uploads = (req,res)=>{
    const files = req.files;

    if(!files){
        const error = new Error('Please choose files')
        error.httpStatusCode = 400
        return error
    }

    let imgArray = files.map((file)=>{
        let img = fs.readFileSync(file.path)

        return encode_img = img.toString('base64')
    })

    let result = imgArray.map((src,index)=>{
        let finalImg = {
            filename:files[index].originalname,
            contentType:files[index].mimetype,
            imageBase64:src

        }

        let newUpload = new Schema(finalImg)
        return newUpload
                .save()
                .then(()=>{
                    return {msg: `${files[index].originalname} Uploaded Successfully`}
                })
                .catch(err =>{
                    if(err){
                        return Promise.reject({error:'Cannot Upload'})
                    }
                })
    })

    Promise.all(result)
        .then(msg =>{
            res.redirect('/')
        })
        .catch(err =>{
            res.json(err)
        })
}