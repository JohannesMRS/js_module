import express from 'express';
import Users from '../models/users.js';
import userPayloads from '../payloads/users.js';

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

routeUser.post('/', async (req, res)=>{
    try{
        const {nama, email, password} = req.body;
        const result = await Users.insertOne({
            nama,
            email,
            password,
        });
        userPayloads(200, 'Data Berhasil Ditambah', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Memasukkan Data', null, res);
    }
});

export default routeUser;