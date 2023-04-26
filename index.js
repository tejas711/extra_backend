const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
 const bodyParser = require('body-parser')

 app.use(cors())

dotenv.config();
 app.use(bodyParser.json())
app.use(express.json())
require("./Database/connect.js")

app.use(require("./router/upload.js"))
app.use(require("./router/serach.js"))

const Video = require("./model/video.js")
app.use(require("./router/auth.js"))
const User=require("./model/user.js")


const PORT = 8080;
 const middleware=(req,res,next)=>{
   console.log("i am midddleware")
    next() }
app.listen(PORT, (err) => {

     if (err) console.log(err);
    console.log(`App listen on ${PORT}`)
})
