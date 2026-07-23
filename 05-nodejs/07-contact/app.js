import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';
import expressLayouts from 'express-ejs-layouts';
import { loadContact, findContact, addContact, cekDuplikat } from './utils/contacts.js';
import {body, check, validationResult} from 'express-validator';


const app = express();
app.set('view engine', 'ejs');
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.use(expressLayouts);

// built in middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

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
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Kontak',
        contacts
    });
})


// contact post
const formValidation = [check('email', 'Email Tidak Valid').isEmail(), check('nohp', 'No HP Tidak Valid').isMobilePhone()];

app.post('/contact', body('email').custom((value)=>{
    const duplikat = cekDuplikat(value);
    if(duplikat){
        throw new Error('Email Sudah Dipakai');
    }
    return true;
}), formValidation, (req, res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        res.render('add', {
            layout: 'layouts/main-layout',
            title: 'Tambah Data',
            errors: errors.array()
        })
    }

    addContact(req.body);
    res.redirect('/contact');
})


app.get('/contact/add', (req, res)=>{
    res.render('add', {
        layout: 'layouts/main-layouts',
        title: 'Tambah Data'
    })
})

app.get('/contact/:id', (req, res)=>{
    // res.sendFile('./contact.html', {root: __dirname});
    const contact = findContact(req.params.id);
    res.render('detail', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Detail Kontak',
        contact
    });
})



app.use('/', (req, res)=>{
    res.status(404);
    res.send('404 Not Found');
})


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});

