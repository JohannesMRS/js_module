import dotenv from 'dotenv';
import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import router from './routes/products.js';
import mongoose from 'mongoose';
import {connectDB} from './models/db.js';


const app = express();
const port = 3000;

dotenv.config();

app.use(expressLayouts);
app.use(express.json());

app.get('/', (req, res)=>{
    res.json([
        {nama: "Johannes", kelas: "MI-4B"},
        {nama: "Ahmad"}
    ]);
});


app.use('/products', router);

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log('Listening On Port', port);
    });
});