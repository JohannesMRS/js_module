import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/products.js';
import mongoose from 'mongoose';
import {connectDB} from './models/db.js';
import routerMahasiswa from './routes/mahasiswa.js';
import response from './helpers/payload.js';


const app = express();
const port = 3000;



app.use(expressLayouts);


app.get('/', (req, res)=>{
    const data = [{
        nama: "Johannes",
        kelas: "MI-4B"
    }]
    response(200, data, "Data Mahasiswa", res);
});


app.use('/products', router);

app.use('/mahasiswa', routerMahasiswa);

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log('Listening On Port', port);
    });
});