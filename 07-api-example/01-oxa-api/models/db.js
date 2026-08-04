import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import express from 'express';

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected Successfully');
    }catch(err){
        console.error(err);
    }
};

export default dbConnect;