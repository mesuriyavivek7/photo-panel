import express from 'express'

import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

//For importing routes
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'


dotenv.config()

const app=express()

//cors settings
const corsOptions={
    origin:(origin,callback)=>{
        const allowedOrigins=[
            "http://localhost:3000",
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
}

//middleware for using cors
app.use(cors(corsOptions));

//by using this middleware we can easily fetch our data
app.use(express.json())
//middleware for read cookies data
app.use(cookieParser())


const connectDb=async ()=>{

    try{
       await mongoose.connect(process.env.MONGO)
       console.log("Connected to mongodb sucessfully")
    }catch(err){
       throw err
    }
}

app.get('/',(req,res)=>{
    res.send("Photoshop app running")
})


//to notify mongodb is connected or disconnected
mongoose.connection.on("connected",()=>{
    console.log("Mongodb connected sucessfully")
})

mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected")
})

//middleware 
app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)


//middleware for catch error

app.use((err,req,res,next)=>{
    const errStatus=err.status || 500
    const errMsg=err.message || "Something went wrong!"
 
    return res.status(errStatus).json({
        success:'false',
        status:errStatus,
        message:errMsg,
        stack:err.stack
    })
 })

 

app.listen(8080,()=>{
    connectDb()
    console.log("app is listented on port:8080")
})