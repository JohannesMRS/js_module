import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res)=>{
    // res.sendFile('./index.html', {root: __dirname});
    const mahasiswa = [
            {nama: 'Johannes', email: 'johannes@gmail.com'},
            {nama: 'Akmal Maulana', email: 'akmal@gmail.com'},
            {nama: 'Junaedi Ahmad', email: 'junaedi@gmail.com'},
            {nama: 'Junaedi Ahmad', email: 'junaedi@gmail.com'},    
        ]
    res.render('index', {
        layout: 'layouts/main-layouts',
        nama: 'Johannes',
        title: 'Halaman Utama',
        mahasiswa,
    });
})

app.get('/about', (req, res)=>{
    // res.sendFile('./about.html', {root: __dirname});
    
    res.render('about', {
        layout: 'layouts/main-layouts',
        title: 'Halaman About'
    });
})

app.get('/contact', (req, res)=>{
    // res.sendFile('./contact.html', {root: __dirname});
    res.render('contact', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Kontak'
    });
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

