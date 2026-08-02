import express from 'express';
import Users from '../models/users.js';
import userPayloads from '../payloads/users.js';

const routeUser = express.Router();

routeUser.get('/', async (req, res)=>{
    try{
        const queryParams = String(req.query.search || ''); // mengindari NoSQL Injection
        const result = await Users.find({nama: queryParams}).select('nama -_id');

        if(result.length === 0){
            return userPayloads(404, 'Data Tidak Ditemukan', [], res);
        }

        userPayloads(200, 'Data Mahasiswa', result, res);

        
    }catch(err){
        userPayloads(500, 'Gagal Mengambil Data', null, res);
    }
});

export default routeUser;