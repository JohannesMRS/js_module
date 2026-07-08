function luasLingkaran(r){
    return 3.14 * r * r;
}

function luasSegitiga(a, t){
    return a * t / 2;
}

function luasPersegiPanjang(p, l){
    return p * l;
}

function luasJajarGenjang(a,t){
    return a * t;
}

console.log(`Luas Lingkaran: ${luasLingkaran(7)}`);
console.log(`Luas Segitiga: ${luasSegitiga(2, 4)}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang(4, 5)}`);
console.log(`Luas Jajar Genjang: ${luasPersegiPanjang(3, 4)}`);


function totalGaji(nama, gaji, jumlahMasuk){
    let hasil = gaji * jumlahMasuk;
    return [hasil, nama];
}

const [nama, hasil] = totalGaji("Johannes", 50000, 30);
console.log(`Nama: ${nama} \nGaji: ${hasil}`);

