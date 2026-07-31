import mongoose from "mongoose";
import express from 'express';

const dbConnect = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/oxa');
        console.log('Berhasil Connect');
    }catch(err){
        console.error(err);
    }
};

export default dbConnect;