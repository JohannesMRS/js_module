import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
// import bodyParser from 'body-parser';s
import router from './routes/products.js';
// import { urlencoded } from 'body-parser';

const app = express();
const port = 3000;

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.json([
        {nama: "Johannes", kelas: "MI-4B"},
        {nama: "Ahmad"}
    ]);
});


app.use('/products', router);

app.listen(port, ()=>{
    console.log('Listening On Port', port);
})