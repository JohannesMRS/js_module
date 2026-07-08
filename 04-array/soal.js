// const produk = [
//   { nama: "Laptop", harga: 8000000 },
//   { nama: "Mouse", harga: 150000 },
//   { nama: "Keyboard", harga: 350000 },
// ];


// function hargaSetelahDiskon(data, minHarga, diskonPersen){
//     const dataFiltered = data.filter((item)=>item.harga >= minHarga)
//     const dataMapped = dataFiltered.map((item)=>({
//         ...item,
//         harga: item.harga - (item.harga*diskonPersen/100),
//         jenis: "Elektronik",
//     }));
//     return dataMapped;
// }

// console.log(hargaSetelahDiskon(produk, 300000, 10));

// const buah = ["apel", "jeruk", "mangga", "pisang", "anggur"];
// buah.shift();
// buah.push('melon');
// const pertama = buah[0];
// const indexTerakhir = buah.length - 1;
// const terakhir = buah[indexTerakhir];
// console.log(buah);
// console.log(pertama);
// console.log(terakhir);




// const nilais = [80, 90, 65, 70, 100];

// let hasil = 0;

// for(let nilai of nilais){
//     hasil += nilai;
//     if(nilai >= 70){
//         console.log(`Nilai ${nilai}, Lulus`);
//     }else{
//         console.log(`Nilai ${nilai}, Remedial`)
//     }
// }

// console.log(`Total nilai: ${hasil}`);
// console.log(`Rata-rata nilai: ${hasil/nilais.length}`);


const namaKota = ["Medan", "Jakarta", "Surabaya", "Bandung"];
namaKota.info = "data kota";

for(let kota in namaKota){
    console.log(`Index ${kota}: ${namaKota[kota]}`);
}




// const hargas = [15000, 25000, 8000, 50000, 12000];

// const hargaMapped = hargas.map((item)=> item - (item*10/100));
// const hargaFiltered = hargaMapped.filter((item)=>item > 15000);
// const hargaReduce = hargaFiltered.reduce((hasil, harga)=>{
//     return hasil + harga;
// }, 0)
// console.log(hargaMapped);
// console.log(hargaFiltered);
// console.log(hargaReduce);

// let hargaTermahal = hargas[0];
// for(let harga of hargas){
//     if(harga > hargaTermahal){
//         hargaTermahal = harga;
//     }
// }

// console.log(hargaTermahal);



// const belanjaan = [
//     {nama: "Beras", harga: 60000, qty: 2},
//     {nama: "Minyak", harga: 20000, qty: 3},
//     {nama: "Gula", harga: 15000, qty: 1},
// ]

// let hasil = [];

// for(let belanja of belanjaan){
//     let res = belanja.harga * belanja.qty;
//     hasil.push(res)
// }

// let total = 0;
// for(let i = 0; i < hasil.length; i++){
//     total += hasil[i];
// }

// let termahal = belanjaan[0].harga/belanjaan[0].qty;
// let namaBarangTermahal = belanjaan[0].nama;
// for(let belanja of belanjaan){
//     let satuan = belanja.harga / belanja.qty;
//     // let namaBarang = belanja.nama
//     if(satuan>termahal){
//         namaBarangTermahal = belanja.nama;
//         termahal = satuan;
//     }
// }
// const namaBarang = belanjaan.map((item)=>item.nama);


// console.log(`Harga barang dikali jumlah barang: ${hasil}`);
// console.log(`Total harga barang: ${total}`);
// console.log(`Barang termahal adalah: ${namaBarangTermahal}, dengan harga ${termahal}`);
// console.log(`Nama barang: ${namaBarang}`); 

// const angka = [1,2,3,4,5];
// for(let i in angka){
//     angka[i] = angka[i] * 2;
// }
// console.log(angka);