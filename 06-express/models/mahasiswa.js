import mongoose from "mongoose";

const mahasiswaSchema = new mongoose.Schema({
    nim: {type: String, required: true},
    nama: {type: String, required: true},
    alamat: {type: String, required: true}
});

export default mongoose.model('Mahasiswa', mahasiswaSchema, 'mahasiswa');