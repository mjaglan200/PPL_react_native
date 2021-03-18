const mongoose = require('mongoose')

const user = new mongoose.Schema({
 
    image:{type:"string"},
    name:{type:"string"},
    Description:{type:"string"},
    Daate:{type:"string"},
    Like:[],
    comment:[
        {
            email:{type:"string"},
            text:{type:"string"}
        }
    ]

},{versionKey:false })

const uploadfile=mongoose.model('uploadfile',user)

module.exports =uploadfile;