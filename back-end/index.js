require('dotenv').config()

const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

const server = express()
const PORT = 3000|| process.env.PORT




server.use(cors())
server.use(express.json())
server.use(router)



server.listen(PORT,()=>{
    console.log( `Educational server started atport ${PORT}`);
})