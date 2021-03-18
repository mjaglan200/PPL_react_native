const mongoose = require('mongoose')
const Schema=mongoose.Schema
const userSchema =new Schema({
    username:{type:String},
    password:{type:String},
    email:{type:String},
    fname:{type:String},
    lname:{type:String},
    resetpasswordtoken: String,
  resetpasswordexpires: Date
})

const user=mongoose.model('Usercollection',userSchema);

module.exports=user

