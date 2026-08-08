import mongoose from "mongoose";

const conn = async()=>{
  try{
    await mongoose.connect('mongodb://localhost:27017/oxa');
    console.log('Koneksi Berhasil');
  }catch(err){
    console.error(err);
  }
}

export default conn;