import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
})
connectDB().then(()=>{
app.listen(process.env.PORT || 4000,()=>{
    console.log(`server is running at:'${process.env.PORT}`)
})
}).catch((err)=>{
    console.log("mongodb connection faild !!!",err);
})












