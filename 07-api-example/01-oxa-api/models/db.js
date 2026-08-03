import mongoose from "mongoose";
import express from 'express';

const dbConnect = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/oxa');
        console.log('Connected Successfully');
    }catch(err){
        console.error(err);
    }
};

export default dbConnect;