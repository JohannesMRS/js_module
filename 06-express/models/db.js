import express from 'express';
import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/university');
        console.log('Koneksi Berhasil');
    }catch(err){
        console.error(err);
    };
};