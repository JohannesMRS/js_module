import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    nama: {type: String, required: true},
    harga: {type: Number, required: true},
    stok: {type: Number, required: true},
    kategori: {type: String, enum: ['Makanan', 'Minuman'], default: 'Makanan'}
});

export default mongoose.model('Menu', menuSchema);