import express from 'express';
import Pesanan from '../models/pesanan.js';
import Menu from '../models/menu.js';
import userPayloads from '../payloads/users.js';
import { getPesanan, getLaporan, postPesanan } from '../controller/pesanan.js';
import { get } from 'mongoose';

const routePesanan = express.Router();

routePesanan.get('/', getPesanan);

routePesanan.get('/laporan', getLaporan);

routePesanan.post('/', postPesanan);

export default routePesanan;