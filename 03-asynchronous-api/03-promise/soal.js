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


async function cekUmurInfo(umurUser){
    try{
        const umur = await cekUmur(umurUser);
        const status = await pesanTambahan(umur);
        console.log(`${umur} \n${status}`);
    }catch(err){console.log(err)}
}

cekUmurInfo(20);
cekUmurInfo(10);
