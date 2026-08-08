import mongoose from "mongoose"

const pesananSchema = new mongoose.Schema({
    _id: Number,
    namaMenu: String,
    hargaMenu: Number,
    jumlahBeli: Number,
    namaPembeli: String
});

export default mongoose.model('Pesanan', pesananSchema, 'pesanans');