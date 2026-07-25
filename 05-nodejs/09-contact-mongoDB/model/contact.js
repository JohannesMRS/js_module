import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true
    },
    email: String,
});

export const Contact = mongoose.models.contact || mongoose.model('contact', contactSchema);