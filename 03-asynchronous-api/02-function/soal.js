function sapa(){
    console.log("Halo, dunia!")
}

sapa();

function sapaDunia(nama){
    console.log(`Halo, ${nama}!`)
}

sapaDunia("Johannes");

function cekGenap(a){
    if(a % 2 == 0){
        return true
    }

    return false;
}

console.log(cekGenap(2))

function hitungDiskon(harga, diskon = 0.1){
    const hargaDiskon = harga - (harga * diskon);
    return hargaDiskon;
}

console.log(hitungDiskon(100000, 0.3))


function angkaTerbesar(arr){
    let angka = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > angka){
            angka = arr[i];
        }
    }
    return angka;
    
}

console.log(angkaTerbesar([4, 7, 2, 9, 4]))