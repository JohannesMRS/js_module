// let token = ~~[Math.random() * 12345678];
// let picture = ['01.jpg'];

// function login(username, callback){
//     console.log("Validasi Data.....")
//     setTimeout(()=>{
//         callback({token, username});
//     },200)
// }

// function getUser(token, callback){
//     console.log("Validasi API Key....")
//     if(token) setTimeout(()=>{
//         callback({apiKey: "xKey123"});
//     },500);
// }

// function getPicture(apiKey, callback){
//     console.log("Menghasilkan Gambar...")
//     if(apiKey) setTimeout(()=>{
//         callback({pic: picture});
//     }, 1500)
// }

// const user = login("Johannes", function(response){
//     const {token} = response;
//     getUser(token, function(response){
//         const {apiKey} = response;
//         getPicture(apiKey, function(response){
//             const {pic} = response;
//             console.log("Picture: ", pic);
//         })
//     })
// });



// function prosesNama(nama, callback){
//     const hasil = nama.toUpperCase();
//     callback(hasil);
// }

// prosesNama("Johannes", (hasil)=>{
//     console.log("Nama: ", hasil);
// })


// function hitungTotalBelanja(keranjang, callback){
//     let total = 0;

//     for(let harga of keranjang){
//         total += harga;
//     }

//     callback(total);
// }

// const keranjang = [15000, 20000, 12000];
// hitungTotalBelanja(keranjang, (total)=>{
//     console.log(`Hasil: ${total}`);
// })


// function dataUser(userId, callback){
//     if(userId){
//         setTimeout(function(){
//             callback({id: userId, username: "dev-medan"});
//         }, 2000)
//     }
// }

// console.log("Memulai pencarian user...")
// dataUser(101, (hasil)=>{
//     console.log("Data ditemukan: ", hasil);
// })

// function cekStokBarang(jumlahBeli, callback){
//     if(jumlahBeli > 10){
//         callback("Stok tidak mencukupi", null);
//     }else{
//         callback(null, "Pesanan di proses");
//     }
// }

// cekStokBarang(9, (err, data)=>{
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("Sukses: ", data);
//     }
// })


function cekUser(username, callback){
    if(username === "Johannes"){
        callback(101)
    }
}

function ambilKeranjang(userId, callback){
    let hargas = [20000, 30000, 50000];
    let totalAwal = 0;
    for(let harga of hargas){
        totalAwal += harga;
    }
    callback(totalAwal);
}

function hitungDiskon(totalAwal, callback){
    let totalAkhir = 0;
    if(totalAwal >= 100000){
        totalAkhir = totalAwal - (totalAwal * 10/100);
        callback(totalAkhir);
    }else{
        callback(totalAwal);
    }
}

cekUser("Johannes", function(responseUser){
    ambilKeranjang(responseUser, function(responseKeranjang){
        hitungDiskon(responseKeranjang, function(responseDiskon){
            console.log(`User ${responseUser} harus membayar Rp${responseDiskon} setelah diskon`)
        })
    })
})

function filterFormatProduk(daftarProduk, callback){
    const produkFiltered = daftarProduk.filter((item)=>item.stok > 0);
    const mapped = produkFiltered.map((item)=>{
        return{
            nama: item.nama.toUpperCase(),
            harga: item.harga
        }
    });
    callback(mapped);
}

const daftarProduk = [
    { id: 1, nama: "kopi hitam", harga: 12000, stok: 5 },
    { id: 2, nama: "roti bakar", harga: 15000, stok: 0 },
    { id: 3, nama: "susu segar", harga: 10000, stok: 3 }
];


filterFormatProduk(daftarProduk, (hasil)=>{
    console.log(hasil);
})


function  kirimOTP(nomorHp, callback){
    if(!nomorHp.includes(+62)){
        callback("Nomor tidak mengandung +62", null)
    }else{
        callback(null, 5681)
    }

}

kirimOTP("+62812", (err, otp)=>{
    setTimeout(()=>{
        if(err){
            console.log(err)
        }else{
            console.log(`Kode OTP Kamu: ${otp}. Waspada \npenipuan! Jangan berikan kode \nini  kepada siapapun, termasuk \npihak Pegadaian`);
        }
    }, 1500)
})

