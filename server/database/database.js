const mongoose = require('mongoose')
const config = require('../../config')

const Connect = async ()=>{
    try{
        const con = await mongoose.connect(config.MONGO_URI,{useNewUrlParser:true})
        console.log(`MongoDB Connected on ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = Connect