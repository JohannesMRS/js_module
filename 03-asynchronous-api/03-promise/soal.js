function cekUmur(umur){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(umur < 17){
                reject("Maaf, Kamu Belum Cukup Umur!")
            }else{
                resolve("Selamat, Kamu Sudah Cukup Umur");                
            }
        }, 1000)
    })
}

function pesanTambahan(umur){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!umur){
                reject("Pesan Tidak Dikirimkan")
            }else{
                resolve("Silahkan Lanjut Ke Tahap Berikutnya...")
            }
        }, 1000)
    })
}

cekUmur(20).then(function(response){
    console.log(response);
    return pesanTambahan(response);
}).then(function(response){
    console.log(response)
}).catch(err=>console.log(err));