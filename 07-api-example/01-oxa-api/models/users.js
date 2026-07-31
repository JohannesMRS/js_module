import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nama: {type: String, required: true},
    email: {type: String, required: true},
});

export default mongoose.model('Users', userSchema, 'users');

    