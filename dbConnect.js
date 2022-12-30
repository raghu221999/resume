const mongoose = require('mongoose')

const URL = 'mongodb+srv://raghu:raghu%401234@cluster0.jeq295s.mongodb.net/resume'
mongoose.set('strictQuery', true);
mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})