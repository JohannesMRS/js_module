import express from 'express';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';

const routeMenu = express.Router();


routeMenu.get('/', async (req, res)=>{
    try{
        const result = await Menu.find();
        userPayloads(200, 'Data Menu', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Mengambil Data', null, res);
    }
})

routeMenu.post('/', async (req, res)=>{
    try{
        const {nama, harga, stok, kategori} = req.body;
        const result = await Menu.insertOne({
            nama,
            harga,
            stok,
            kategori
        });
        userPayloads(200, 'Data Berhasil Di Tambah', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Menambah Data', null, res);
    }
})

export default routeMenu;