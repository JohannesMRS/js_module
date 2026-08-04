import express from 'express';
import Pesanan from '../models/pesanan.js';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';
import { get } from 'mongoose';

const routePesanan = express.Router();

routePesanan.get('/', async (req, res)=>{
    try{
        const result = await Pesanan.find();
        userPayloads(200, 'Data Pesanan', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Mengambil Data', null, res);
    }
});

routePesanan.post('/', async (req, res)=>{
    try{
        const {namaMenu, jumlahBeli, namaPembeli} = req.body;
        const getMenu = await Menu.findOne({nama: namaMenu});
        const hargaBaru = getMenu.harga * jumlahBeli;

        if(getMenu.stok > jumlahBeli){
            const result = await Pesanan.create({
                namaMenu,
                hargaMenu: hargaBaru,
                jumlahBeli,
                namaPembeli,
                tanggal: Date.now()
            });
            

            const stokBaru = getMenu.stok - jumlahBeli;

            const updateStok = await Menu.findOneAndUpdate(
                {nama: namaMenu},
                {$inc:{stok: -jumlahBeli}},
                {new: true, runValidators: true},
            )

            userPayloads(200, 'Berhasil Menambah Data', updateStok, res);
        }else{
            userPayloads(200, 'Stok Tidak Cukup', null, res);
        }
    }catch(err){
        userPayloads(500, err, null, res);
    }
});

export default routePesanan;