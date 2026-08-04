import mongoose from "mongoose";

const pesananSchema = new mongoose.Schema({
    namaMenu:{type: String, required: true},
    hargaMenu:{type: Number, required: true},
    jumlahBeli:{type: Number, required: true},
    namaPembeli:{type: String, required: true, default: 'pelanggan umum'},
    tanggal: {type: Date, default: Date.now}
});

export default mongoose.model('Pesanan', pesananSchema);