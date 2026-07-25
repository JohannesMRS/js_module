import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import {Contact} from './model/contact.js';
import './utils/db.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
// require('./utils/db');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(expressLayouts);
app.use(cookieParser('secret'));
app.use(session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));
app.use(flash());

app.get('/', (req, res)=>{

    const mahasiswa = [
        {nama: "Ahmad Subarjo", email: "ahmad12@gmail.com"},
        {nama: "Raka Fahrudin", email: "raka09@gmail.com"},
    ];

    res.render('index', {
        title: 'Halaman Utama',
        layout: 'layouts/main-layouts',
        mahasiswa,
    })
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'Halaman About',
        layout: 'layouts/main-layouts'
    })
});

app.get('/contact', async (req, res)=>{
    // res.sendFile('./contact.html', {root: __dirname});
    const contacts = await Contact.find();
    res.render('contact', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Kontak',
        msg: req.flash('msg'),
        contacts
    });
});

app.get('/contact/:nama', async (req, res)=>{
    // res.sendFile('./contact.html', {root: __dirname});
    const contact = await Contact.findOne({nama:req.params.nama});
    res.render('detail', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Detail Kontak',
        contact,
    });
});

app.listen(port, ()=>{
    console.log(`Server Running At Port ${port}`);
})