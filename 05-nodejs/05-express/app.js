import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res)=>{
    res.sendFile('./index.html', {root: __dirname});
})

app.get('/about', (req, res)=>{
    res.sendFile('./about.html', {root: __dirname});

})

app.get('/contact', (req, res)=>{
    res.sendFile('./contact.html', {root: __dirname});
})

app.get('/product/:id', (req, res)=>{
    res.send(`Id Produk: ${req.params.id} <br> Id Kategori: ${req.query.category}`);
})

app.use('/', (req, res)=>{
    res.status(404);
    res.send('404 Not Found');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

