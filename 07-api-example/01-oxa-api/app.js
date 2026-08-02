import express from 'express';
import dbConnect from './models/db.js';
import Users from './models/users.js';
import users from './routes/users.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Berhasil')
});

app.use('/users', users);


dbConnect().then(
    app.listen(port, ()=>{
        console.log(`Listening On Port: ${port}`);
    })
)