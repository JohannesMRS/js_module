import express from 'express';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';
import {body, validationResult} from 'express-validator';


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
});

routeMenu.put('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const {nama, harga, stok, kategori} = req.body;
        const dataLama = await Menu.findOne({
            _id: {$ne:id}
        })
        if(dataLama){
            return userPayloads(409, 'Data Duplikat', null, res);
        }

        const result = await Menu.findOneAndUpdate(
            {_id:id},
            {
                nama,
                harga,
                stok,
                kategori
            },
            {new: true, runValidators: true}
        );

        userPayloads(200, 'Data Berhasil Di Update', result, res)
    }catch(err){
        userPayloads(500, 'Gagal Update Data', null, res);
    }
});

routeMenu.delete('/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        const result = await Menu.findOneAndDelete({_id: id});
        userPayloads(200, 'Data Berhasil Di Hapus', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Menghapus Data', null, res);
    }
});

export default routeMenu;