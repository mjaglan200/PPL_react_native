const express = require('express')
const router=express.Router();
const user=require('../Schema/Schema')
const uploadfile=require('../Schema/ImageSchema')
const api=require('../API/api')
var multer  = require('multer')
var  nodemailer = require('nodemailer')
const Address=require('../Config/Config')

const storage=multer.diskStorage(
    {
        destination:'./images',
        filename:function(req,file, cb){
            cb(null,file.originalname)
        }
    }
)

var upload=multer({ storage:storage})

router.post(Address.data[1],async (req, res)=>{
    let email=req.body.email
    console.log("emal is",req.body.email)
    let chk=await user.findOne({email:email})
    if(chk){
        console.log("true")
        res.send(true)
    }else{
        console.log('false')
        res.send(false)
    }
})

router.post('/reg',async(req, res)=>{

    console.log("emilal is",req.body,email)
})

router.post(Address.data[2], async (req, res)=>{
    let email=req.body.email;
    const link="http://localhost:3000/Reset "
   
    let otp=(Math.floor(100000 + Math.random() * 900000));
    
    await user.find({email}).then((response)=>{ 
        
       
        response.map((items)=>{
            let a=items.email;
           
        if(a){
            
            
        let mailTransporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
                user: Address.user, 
                pass: Address.pass
            } 
        }); 
          
        let mailDetails = { 
            from: Address.user, 
            to: a, 
           
            subject: 'OTP FOR RESET PASSWORD ', 
            text: 'your otp is :'+ otp
        }; 
          
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err) { 
                console.log('Error Occurs'); 
            } else { 
              console.log(mailDetails.text);
                console.log('Email sent successfully');
                var obj={otp,email}
                console.log(obj)
                res.send(obj)
                } 
        });    
    }

    else{
        res.send('email not exist')
        console.log("not exist")
        
    }
})
})

})

router.post(Address.data[3],async function(req, res){
let email=req.body
    console.log(email)
    user.find({"email":req.body.email}).then((result)=>{
        user.updateOne({"email":req.body.email},{$set:{"password":req.body.text1}}).then((result1)=>{
            console.log(result1)
            res.json(result1)
        })
    })

           
})

router.post('/emailcheck', async (req, res)=>{


    let email = req.body.email
    // console.log(email)
    var search=await user.findOne({email})
    if(search){
        
        res.send('found')
    }
    else{
        res.send('not')
    }
    
}) 


router.post(Address.data[4], async(req, res) =>{

        let emaila = req.body.email;
        console.log('email here :',emaila);
        let search = await api.Registers(emaila)
   
        if(search)
        {
            // console.log("already registered")
            res.end(" user already exist")
        }
        else{
                user.create(req.body) 
                // console.log('created') 
                res.send('User Successfully  Crerated')
        }
       
})

    router.post(Address.data[5], async function(req, res){
    let result = await api.Login(req.body)
    res.send(result)})


    router.post('/imageup',upload.single('image'),async function(req, res, next){
console.log(req.body)
console.log(req.file);
// console.log(req.body.fileName)
        await  uploadfile.create({'image':req.file.originalname,'name':req.body.name,'Description':req.body.Description,'Daate':req.body.Daate})    
           res.send("image saved successfully")
           console.log("saved successfully image")
       })

    router.get('/getimage',async function(req, res){
        console.log('get image')
        let ress=await uploadfile.find();
        
        res.send(ress);
        // console.log(ress)

    })
   




//     router.post('/imageup',upload.single('Photo'),async function(req, res, next){
// console.log(req.body)
// console.log(req.file);
// // console.log(req.body.fileName)

//      await  uploadfile.create({'image':req.body.fileName,'name':req.body.name,'Description':req.body.Description,'Daate':req.body.Daate})
    
//         res.send("image saved successfully")
//         console.log("saved successfully image")


//     })

    router.post(Address.data[7], async function(req, res){
        // console.log("received id from frontend : ",req.body.id)
        // console.log("received id from frontend : ",req.body)
        idd=req.body.id

        let searchh = await uploadfile.findOne({_id:idd})
        res.send(searchh)

    })


    router.post(Address.data[8],(req,res)=>{
        console.log(req.body)
        uploadfile.find({"_id":req.body.id}).then((result)=>{
            uploadfile.updateOne({"_id":req.body.id},{$push:{comment:[{email:req.body.email,text:req.body.text}]}}).then(()=>{
                uploadfile.findOne({"_id":req.body.id}).then((result1)=>{
                    res.json(result1)
                })
            })
            
        })
       
    })


    router.post(Address.data[9],(req,res)=>{
        console.log(req.body)
        uploadfile.findOne({"_id":req.body.id}).then((result)=>{
            // console.log(result)
            if(result.Like.length==0){
                uploadfile.updateOne({"_id":req.body.id},{$push:{Like:[req.body.email]}}).then(()=>{
                    uploadfile.findOne({"_id":req.body.id}).then((result1)=>{
                        res.json(result1);

                    })

                })
            }
            else{
                const a=result.Like.includes(req.body.email);
                console.log(a)
                if(a){
                    uploadfile.updateOne({"_id":req.body.id},{$pullAll:{Like:[req.body.email]}}).then(()=>{
                        uploadfile.findOne({"_id":req.body.id}).then((result1)=>{
                            res.json(result1);
    
                        })
    
                    })
                }else{
                    uploadfile.updateOne({"_id":req.body.id},{$push:{Like:[req.body.email]}}).then(()=>{
                        uploadfile.findOne({"_id":req.body.id}).then((result1)=>{
                            res.json(result1);
    
                        })
    
                    })
                    
                }
            }
            console.log(result)
        })
    })


module.exports =router;