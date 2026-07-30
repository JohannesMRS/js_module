// import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Mahasiswa from '../models/mahasiswa.js';
// import router from './products.js';

const routerMahasiswa = express.Router();

routerMahasiswa.use(express.urlencoded({extended: true}));
routerMahasiswa.use(express.json());


routerMahasiswa.get('/', async (req, res)=>{
    try{
        const dataMahasiswa = await Mahasiswa.find();
        res.status(200).json(dataMahasiswa);
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

routerMahasiswa.post('/', async(req, res)=>{
    try{
        const validasiNim = await Mahasiswa.exists({nim: req.body.nim});
        if(validasiNim){
            res.status(400).json({
                success: false,
                message: 'NIM Sudah Dipakai',
            })
        }else{
            const mahasiswaBaru = new Mahasiswa({
                nim: req.body.nim,
                nama: req.body.nama,
                alamat: req.body.alamat,
            });
            const tambahData = await mahasiswaBaru.save();
            res.status(201).json({
                success: true,
                message: 'Data berhasil ditambah',
                data: tambahData
            });
        }
        
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

routerMahasiswa.put('/:nim', async (req, res)=>{
    try{
        const dataMahasiswa = await Mahasiswa.updateOne(
            {nim: req.params.nim},
            {
                $set: {
                    nim: req.body.nim,
                    nama: req.body.nama,
                    alamat: req.body.alamat
                }
            }
        );

        if(dataMahasiswa.matchedCount === 0){
            return res.status(404).json({
                success: false,
                message: 'Mahasiswa Tidak Ditemukan',
            })
        }
        const dataUpdate = await Mahasiswa.findOne({nim: req.body.nim});
        res.status(200).json({
            success: true,
            message: 'Data Berhasil Diperbarui',
            data: dataUpdate,
        })
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

routerMahasiswa.delete('/:nim', async (req, res)=>{
    try{
        const hapusMahasiswa = await Mahasiswa.deleteOne({nim: req.params.nim});
        const dataMahasiswa = await Mahasiswa.find();
        res.status(200).json({
            success: true,
            message: `Data dengan nim ${req.params.nim} berhasil dihapus`
        });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
})

export default routerMahasiswa;





