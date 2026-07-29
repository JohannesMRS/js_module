import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Koneksi Berhasil');
    }catch(err){
        console.error(err);
    };
};