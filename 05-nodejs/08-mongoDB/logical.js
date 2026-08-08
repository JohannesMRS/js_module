import conn from './models/db.js';
import Pesanan from './models/pesanan.js';

async function main(){
  await conn();
  try{
    const data = {
      namaMenu: "Ayam Penyet",
      hargaMenu: 14000,
      jumlahBeli: 4,
      namaPembeli: "Ismail Muchtar"
    };

    // const result = await Pesanan.find({
    //     $and: [
    //         {rating: {$gt: 2}},
    //         {payment_method:'QRIS'}
    //     ]
    // });

    const result = await Pesanan.find({
        $or: [
            {rating: {$gt:4.8}},
            {rating: {$lt:4.2}}
        ]
    });
    console.log(result);
    }catch(err){
    console.error(err);
  }
}

main();