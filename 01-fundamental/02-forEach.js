let dataSiswa = ["Alex", "Bima", "Chandra", "Doni"];
dataSiswa.forEach((item, indeks) => {
  console.log(`No ${indeks + 1}. Nama: ${item}`);
});

let hargaBarang = [15000, 25000, 50000, 10000];
let totalHarga = 0;
hargaBarang.forEach((harga) => {
  totalHarga += harga;
});
console.log(`Total Belanjaan: ${totalHarga}`);

let daftaUmur = [12, 25, 17, 30, 14, 19];
let anakAnak = [];
let dewasa = [];
daftaUmur.forEach((umur) => {
  umur < 18 ? anakAnak.push(umur) : dewasa.push(umur);
});
console.log(`Anak-anak: ${anakAnak}\nDewasa: ${dewasa}`);
