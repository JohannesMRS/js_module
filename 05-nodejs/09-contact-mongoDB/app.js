import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import {Contact} from './model/contact.js';
import './utils/db.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import {body, validationResult, check} from 'express-validator';
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

app.get('/contact/add', (req, res)=>{
    res.render('add', {
        layout: 'layouts/main-layouts',
        title: 'Halaman Tambah Data',
    });
});

app.post('/contact', [
    body('email').custom(async (value)=>{
        const duplikat = await Contact.findOne({email: value});
        if(duplikat){
            throw new Error('Email Sudah Digunakan');
        }
        return true;
    }),
    check('email', 'Email Tidak Valid').isEmail(),
    async (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.render('add', {
                layout:'layouts/main-layouts',
                title: 'Halaman Tambah Data',
                errors: errors.array(),
            });
        }else{
            try{
                await Contact.insertMany(req.body);
                req.flash('msg', 'Data Berhasil Ditambah');
                res.redirect('/contact');
            }catch(error){
                console.error(error);
                res.status(500).send('Terjadi Kesalahan server');
            }
        }
    }
]);

app.get('/contact/delete/:email', async (req, res)=>{
    const contact = await Contact.findOne({email: req.params.email});
    if(!contact){
        req.flash('msg', 'Data Tidak Ada');
        res.redirect('/contact');
    }else{
        await Contact.deleteOne(req.body);
        req.flash('msg', 'Data Berhasil DiHapus');
        res.redirect('/contact');
    }
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