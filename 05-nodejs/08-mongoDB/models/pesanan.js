import mongoose from "mongoose"

const pesananSchema = new mongoose.Schema({
    namaMenu: String,
    hargaMenu: Number,
    jumlahBeli: Number,
    namaPembeli: String
});

export default mongoose.model('Pesanan', pesananSchema, 'pesanans');