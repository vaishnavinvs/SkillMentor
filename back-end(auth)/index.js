

const express = require('express')
const cors = require('cors')
const logic = require('./services/logic')
const server = express()

server.use(cors({
    origin:'http://localhost:4200'
}))

server.use(express.json())

server.listen(3200,()=>{
    console.log("Server is listening at port 3200");
})



server.post('/register',(req,res)=>{
    console.log('inside register api');
    console.log(req.body);
    //get  uname,pswd,email
     logic.register(req.body.uname,req.body.email,req.body.pswd)
     .then((result)=>{
       //send result to client
        res.status(result.statusCode).json(result)
    // res.send('start to resolve register req')
    })
    })


    server.post('/login',(req,res)=>{
        console.log('inside login api');
        console.log(req.body);
    
        //get uname,pswd
        logic.login(req.body.uname,req.body.pswd)
        .then((result)=>{
            //send result to client 
    res.status(result.statusCode).json(result)
        })
    })


    