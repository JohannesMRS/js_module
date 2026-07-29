import express from 'express';
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/', (req, res)=>{
    res.json([
        {
            id: "A2B4-XYZ-123",
            title: "Kemeja Polo Pria Premium",
            description: "Terbuat dari 100% katun organik, kemeja polo klasik ini memiliki potongan slim fit dengan logo bordir di dada kiri. Cocok untuk penggunaan kasual maupun semi-formal.",
            brand: "FashionNusantara",
            price: {
                amount: 150000,
                currency: "IDR"
  }
        }
    ]);
});

router.post('/', (req, res)=>{
    res.send({result: req.body});
   console.log('Berhasil Masuk');
});

router.put('/', (req, res)=>{
    if(req.query.id == 1){
        res.send(req.body);
        console.log(req.query);
    }else{
        res.send('Gagal masuk');
        console.log('Gagal Masuk Bluds')
    }
})

export default router;