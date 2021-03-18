const express =require('express')
const app=express();
const mongoose = require('mongoose')
const cors=require('cors')
const Address=require('../Config/Config')
const Router =require('../Router/Router')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
mongoose.connect(Address.data[0], {useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("mongo connected")
});


const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(express.static('images'))

app.use(cors(corsOptions));
app.use('/',Router)
// app.use(cors());

app.listen(Address.port,()=>{

    console.log(`server connected on ${Address.port}`);
})