import express from 'express';
import Pesanan from '../models/pesanan.js';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';
import { getPesanan, getLaporan, postPesanan, updatePesanan, deletePesanan } from '../controller/pesananController.js';
import { get } from 'mongoose';

const routePesanan = express.Router();

routePesanan.get('/', getPesanan);

routePesanan.get('/laporan', getLaporan);

routePesanan.post('/', postPesanan);

routePesanan.put('/:id', updatePesanan);

routePesanan.delete('/:id', deletePesanan);

export default routePesanan;