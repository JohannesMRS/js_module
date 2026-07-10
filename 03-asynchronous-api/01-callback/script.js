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



function prosesNama(nama, callback){
    const hasil = nama.toUpperCase();
    callback(hasil);
}

prosesNama("Johannes", (hasil)=>{
    console.log("Nama: ", hasil);
})


function hitungTotalBelanja(keranjang, callback){
    let total = 0;

    for(let harga of keranjang){
        total += harga;
    }

    callback(total);
}

const keranjang = [15000, 20000, 12000];
hitungTotalBelanja(keranjang, (total)=>{
    console.log(`Hasil: ${total}`);
})


function dataUser(userId, callback){
    if(userId){
        setTimeout(function(){
            callback({id: userId, username: "dev-medan"});
        }, 2000)
    }
}

console.log("Memulai pencarian user...")
dataUser(101, (hasil)=>{
    console.log("Data ditemukan: ", hasil);
})

function cekStokBarang(jumlahBeli, callback){
    if(jumlahBeli > 10){
        callback("Stok tidak mencukupi", null);
    }else{
        callback(null, "Pesanan di proses");
    }
}

cekStokBarang(9, (err, data)=>{
    if(err){
        console.log("Error: ", err);
    }else{
        console.log("Sukses: ", data);
    }
})