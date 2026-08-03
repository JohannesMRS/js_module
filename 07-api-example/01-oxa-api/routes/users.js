import express from 'express';
import Users from '../models/users.js';
import userPayloads from '../payloads/users.js';
import {body, validationResult} from 'express-validator';
import bcrypt from 'bcrypt';

const routeUser = express.Router();

routeUser.get('/', async (req, res)=>{
    try{
        const result = await Users.find();
        if(result.length === 0){
            return userPayloads(404, 'Data Tidak Ditemukan', [], res);
        }
        userPayloads(200, 'Data Mahasiswa', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Mengambil Data', null, res);
    }
});

routeUser.post('/', 
    [
        body('nama').notEmpty().withMessage('Nama Tidak Boleh Kosong'),
        body('email').isEmail().withMessage('Sertakan Email Yang Valid'),
        body('password').isLength({min: 8}).withMessage('Password Minimal 8 Karakter')
    ],async (req, res)=>{
    try{
        const errors = validationResult(req);
        const {nama, email, password} = req.body;
        const saltRounds = 10;

        // Cek Apakah Ada Error dari body yang dikirimkan
        if(!errors.isEmpty()){
            return userPayloads(400, errors.array(), null, res);
        }

        // Bereng Email Na Sarupa
        const emailDuplikat = await Users.findOne({email: email});
        if(emailDuplikat){
            return userPayloads(409, 'Email Sudah Dipakai', null, res);
        }

        const passwordHashed = await bcrypt.hash(password, saltRounds);

        const result = await Users.insertOne({
            nama,
            email,
            password: passwordHashed
        });
        userPayloads(200, 'Data Berhasil Ditambah', result, res);
        
    }catch(err){
        userPayloads(500, 'Gagal Memasukkan Data', null, res);
    }
});

routeUser.put('/:id', 
    [
        body('nama').notEmpty().withMessage('Nama Tidak Boleh Kosong'),
        body('email').isEmail().withMessage('Sertakan Email Yang Valid'),
        body('password').isLength({min: 8}).withMessage('Password Minimal 8 Karakter')
    ],async (req, res)=>{
    try{
        const errors = validationResult(req);
        const {id} = req.params;
        const {nama, email, password} = req.body;
        const saltRounds = 10;

        // Cek Apakah Ada Error dari body yang dikirimkan
        if(!errors.isEmpty()){
            return userPayloads(400, errors.array(), null, res);
        }

        // Cek Duplikat Email
        const emailDuplikat = await Users.findOne(
            {
                email: email,
                _id: { $ne: id}
            }
        );
        if(emailDuplikat){
            return userPayloads(409, 'Email Sudah Dipakai', null, res);
        }

        const passwordHashed = await bcrypt.hash(password, saltRounds);

        const result = await Users.findOneAndUpdate(
            {_id:id},
            {$set: {
                nama,
                email,
                password: passwordHashed
            }},
            {new: true, runValidators: true}
        );

        const showData = await Users.findOne({_id:id});
        userPayloads(200, 'Data Berhasil DiUpdate', result, res);
        
    }catch(err){
        userPayloads(500, 'Gagal Memasukkan Data', null, res);
    }
});

routeUser.delete('/:id', async (req, res)=>{
   try{
    const result = await Users.findOneAndDelete({_id: req.params.id});
    userPayloads(200, 'Data Berhasil Dihapus', result, res);    
   }catch(err){
    userPayloads(500, 'Gagal Menghapus Data', null, res);
   }
})


export default routeUser;