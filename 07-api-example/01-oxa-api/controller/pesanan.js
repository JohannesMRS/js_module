import express from 'express';
import Menu from '../models/menu.js';
import Pesanan from '../models/pesanan.js';
import userPayloads from '../payloads/users.js';

export const getPesanan = async (req, res)=>{
    try{
        const result = await Pesanan.find();
        userPayloads(200, 'Data Pesanan', result, res);
    }catch(err){
        userPayloads(500, 'Gagal Mengambil Data', null, res);
    }
};


export const getLaporan = async (req, res)=>{
    try{
        const result = await Pesanan.find();

        const sum = await Pesanan.aggregate([
            {
                $group: {
                    _id: "$namaMenu",
                    totalHarga: {$sum: "$hargaMenu"}
                }
            }
        ]);

        userPayloads(200, 'Total Penjualan', sum, res);
    }catch(err){
        userPayloads(500, 'Gagal Mengambil data', null, res);
    }
};

export const postPesanan = async (req, res)=>{
    try{
        const {namaMenu, jumlahBeli, namaPembeli} = req.body;
        const getMenu = await Menu.findOne({nama: namaMenu});

        if(!getMenu){
            return userPayloads(404, "Menu Tidak Ada", null, res);
        }

        const hargaBaru = getMenu.harga * jumlahBeli;
        // Menambah Data Jika Stoknya >= jumlahBeli
        if(getMenu.stok >= jumlahBeli){
            const result = await Pesanan.create({
                namaMenu,
                hargaMenu: hargaBaru,
                jumlahBeli,
                namaPembeli,
                tanggal: Date.now()
            });
            
            // Update Stok Menu
            const updateStok = await Menu.findOneAndUpdate(
                {nama: namaMenu},
                {$inc:{stok: -jumlahBeli}},
                {new: true, runValidators: true},
            )
            userPayloads(200, 'Berhasil Menambah Data', updateStok, res);
        }else{
            userPayloads(409, 'Stok Tidak Cukup', null, res);
        }
    }catch(err){
        userPayloads(500, "Gagal Mengambil Data", null, res);
    }
}