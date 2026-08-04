import 'dotenv/config';
import express from 'express';
import dbConnect from './models/db.js';
import Users from './models/users.js';
import users from './routes/users.js';
import Menu from './models/menu.js';
import menus from './routes/menu.js';
import Pesanan from './models/pesanan.js';
import pesanans from './routes/pesanan.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Berhasil')
});

app.use('/users', users);

app.use('/menu', menus);

app.use('/pesanan', pesanans);

dbConnect()
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Listening On Port: ${PORT}`);
    })
})