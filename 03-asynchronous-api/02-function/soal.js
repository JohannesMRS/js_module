// function sapa(){
//     console.log("Halo, dunia!")
// }

// sapa();

// function sapaDunia(nama){
//     console.log(`Halo, ${nama}!`)
// }

// sapaDunia("Johannes");

// function cekGenap(a){
//     if(a % 2 == 0){
//         return true
//     }

//     return false;
// }

// console.log(cekGenap(2))

// function hitungDiskon(harga, diskon = 0.1){
//     const hargaDiskon = harga - (harga * diskon);
//     return hargaDiskon;
// }

// console.log(hitungDiskon(100000, 0.3))


// function angkaTerbesar(arr){
//     let angka = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > angka){
//             angka = arr[i];
//         }
//     }
//     return angka;
    
// }

// console.log(angkaTerbesar([4, 7, 2, 9, 4]))



function kategoriUmur(umur){
    let status = "Default";
    if(umur < 13){
        status = "Anak-Anak"
    }else if(umur >= 13  && umur <= 17){
        status = "Remaja"
    }else if(umur >= 18 && umur <= 59){
        status = "Dewasa"
    }else if(umur >= 60){
        status = "Lansia"
    }
    return status;
}

console.log(kategoriUmur(10))
console.log(kategoriUmur(15))
console.log(kategoriUmur(30))
console.log(kategoriUmur(65))


function luasLingkaran(jari){
    let hasil = 3.14 * jari * jari;
    return hasil;
}

function kelilingLingkaran(jari){
    let hasil = 2 * 3.14 * jari;
    return hasil;
}

function infoLingkaran(jari){
    return {
        luas: luasLingkaran(jari),
        keliling: kelilingLingkaran(jari)
    }
}
console.log(infoLingkaran(7))


function kaliDua(x){
    return x * 2;
}

function olahAngka(arr, callback){
    let hasil = []
    for(let i = 0; i < arr.length; i++){
        hasil.push(callback(arr[i]))

    }

    return hasil;
}

console.log(olahAngka([1,2,3,4], kaliDua))


function mahasiswaLolos(data){
    let dataFiltered = data.filter((i)=>i.nilai>=60).map((i)=>i.nama)
    return dataFiltered;
}

const mahasiswa = [
  { nama: "Andi", nilai: 80 },
  { nama: "Budi", nilai: 55 },
  { nama: "Citra", nilai: 90 },
  { nama: "Dewi", nilai: 40 },
];


console.log(mahasiswaLolos(mahasiswa))


function factorial(n){
    if(n === 1 || n === 0){
        return 1
    }

    return n * factorial(n-1);
}

console.log(factorial(3));