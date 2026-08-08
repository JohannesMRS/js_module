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

    const result = await Pesanan.findOne({order_id: 'ORD-1001'})

    console.log(result.payment_method);
  }catch(err){
    console.error(err);
  }
}

main();