import express from 'express';
import expressLayouts from 'express-ejs-layouts';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(expressLayouts);

app.get('/', (req, res)=>{

    const mahasiswa = [
        {nama: "Ahmad Subarjo", email: "ahmad12@gmail.com"},
        {nama: "Raka Fahrudin", email: "raka09@gmail.com"},
    ]

    res.render('index', {
        title: 'Halaman Utama',
        layout: 'layouts/main-layouts',
        mahasiswa,
    })
});

app.listen(port, ()=>{
    console.log(`Server Running At Port ${port}`);
})