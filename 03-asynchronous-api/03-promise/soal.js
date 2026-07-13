// function cekUmur(umur){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(umur < 17){
//                 reject("Maaf, Kamu Belum Cukup Umur!")
//             }else{
//                 resolve("Selamat, Kamu Sudah Cukup Umur");                
//             }
//         }, 1000)
//     })
// }

// function pesanTambahan(umur){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(!umur){
//                 reject("Pesan Tidak Dikirimkan")
//             }else{
//                 resolve("Silahkan Lanjut Ke Tahap Berikutnya...")
//             }
//         }, 1000)
//     })
// }


// async function cekUmurInfo(umurUser){
//     try{
//         const umur = await cekUmur(umurUser);
//         const status = await pesanTambahan(umur);
//         console.log(`${umur} \n${status}`);
//     }catch(err){console.log(err)}
// }

// cekUmurInfo(20);
// cekUmurInfo(10);



function validasiApiKey(key){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(key === "RAHASIA123"){
                resolve("Akses Diterima");
            }else{
                reject("API Key Tidak Valid");
            }
        }, 1000);
    })
}


validasiApiKey("RAHASIA123").then((result)=>{
    console.log(`Status: ${result}`);
}).catch((err)=>{
    console.log(`Status: ${err}`);
})

function cekStok(barang){
    return new Promise((resolve, reject)=>{
        console.log(`Cek Stok ${barang}`);
        setTimeout(()=>{
            if(barang === "Kopi"){
                resolve(true);
            }else{
                reject("Barang Habis!");
            }
        }, 1000)
    })
}

function buatTagihan(statusStok){
    return new Promise((resolve, reject)=>{
        console.log("Memproses Permintaan....")
        setTimeout(()=>{
            if(statusStok===true){
                resolve(15000);
            }else{
                reject("Stok Habis!")
            }
        }, 1000);
    })
}

cekStok("Kopi").then((statusBarang)=>{
    return buatTagihan(statusBarang);
}).then((hargaTotal)=>{
    console.log(`Harga: ${hargaTotal}`);
}).catch((err)=>{
    console.log(err);
})


// Promise All

const nama = "Johannes";
const umur = 18;

Promise.all([nama, umur])
.then(res=>{
    console.log(`Nama: ${res[0]}`);
    console.log(`Nama: ${res[1]}`);

})