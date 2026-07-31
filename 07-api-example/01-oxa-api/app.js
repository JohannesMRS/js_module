import express from 'express';
import dbConnect from './models/db.js';
import Users from './models/users.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Berhasil')
});

app.get('/users', async (req, res)=>{
    try{
        const result = await Users.find();
        res.json({result});
    }catch(err){
        console.error(err);
    }
});

app.get('/data', async (req, res)=>{

})


dbConnect().then(
    app.listen(port, ()=>{
        console.log(`Listening On Port: ${port}`);
    })
)