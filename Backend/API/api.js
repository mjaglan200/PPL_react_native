const express= require('express')
const user = require('../Schema/Schema')


api={
    Registers:async function(email)
    {
       
        var search=await user.findOne({email})
        return search

    },

    Login : async function(Body)
    {
    let email = Body.email;
    let pass = Body.password;
    var a=await user.findOne({email})
    if(a){
        var tempass=a.password 
        
    }else{

        return("check ur email")
    }
    
    if(tempass==pass){  
        console.log("matched") 
        return('matched')   
           

    }else{
        console.log("pass inccorrect")    
       return("pass incorrect")

    }

    }}



module.exports =api;