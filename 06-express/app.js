import express from 'express';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const port = 3000;

app.use(expressLayouts);


app.get('/', (req, res)=>{
    res.json([
        {nama: "Johannes"},
        {nama: "Ahmad"}
    ]);
})

app.listen(port, ()=>{
    console.log('Listening On Port', port);
})