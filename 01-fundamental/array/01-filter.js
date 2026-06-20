/*Filter merupakan sebuah function built-in 
dari javascript yang tujuannya untuk menyaring
data dari array utama dan menampilkannya */

const nilaiSiswa = [10, 20, 30, 40, 50];
const siswaFiltered = nilaiSiswa.filter((siswa) => siswa < 30);
console.log(siswaFiltered);

// array dengan object

const dataSiswa = [
  { nama: "Johannes", kelas: "MI-4B", umur: 20 },
  { nama: "Irfan", kelas: "MI-4B", umur: 21 },
  { nama: "Penra", kelas: "MI-4A", umur: 19 },
];

const dataFiltered = dataSiswa.filter(
  (siswa) => siswa.kelas == "MI-4B" && siswa.umur <= 20,
);

console.log(dataFiltered);
