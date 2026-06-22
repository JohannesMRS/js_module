// Beda dari filter map digunakan untuk mengubah data dari array aslinya

const dataSiswa = [
  { nama: "Johannes", kelas: "MI-4B", umur: 20 },
  { nama: "Irfan", kelas: "MI-4B", umur: 21 },
  { nama: "Penra", kelas: "MI-4A", umur: 19 },
];

const siswaMap = dataSiswa.map((siswa) => {
  return {
    ...siswa, // Spread Operator => Menyalin data dari array
    umur: siswa.umur + 1,
  };
});

console.log(siswaMap);
