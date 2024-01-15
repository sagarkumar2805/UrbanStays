import express  from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config();
import mongoose from "mongoose";

import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'


// mongodb connection 

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected to mongoDB")
        
    } catch (error) {
        throw(error)
        
    }
}

mongoose.connection.on("disconnected" , ()=>{
    console.log("mongodb disconnected")
})

mongoose.connection.on("connected" , ()=>{
    console.log("mongodb connected")
})


// app.get("/", (req,res)=>{
//     res.send("hello server started")
// })

app.use(express.json())

//middlewares
app.use("/api/auth", authRoute); 
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);




app.listen(8800, ()=>{
    connect();
    console.log("Connected to backend!")
})