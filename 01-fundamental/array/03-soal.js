// Chaining (Menggabungkan beberapa teknik di manipulasi array)

// const databaseMahasiswa = [
//   { nama: "rian hidayat", ipk: 3.8, isOrganisasi: true, nim: "240101" },
//   { nama: "sari utami", ipk: 3.2, isOrganisasi: true, nim: "240102" },
//   { nama: "toni perkasa", ipk: 3.9, isOrganisasi: false, nim: "240103" },
//   { nama: "gita lestari", ipk: 3.7, isOrganisasi: true, nim: "240104" },
//   { nama: "budi santoso", ipk: 3.4, isOrganisasi: false, nim: "240105" },
// ];

// const mahasiswaFiltered = databaseMahasiswa
//   .filter((mahasiswa) => mahasiswa.ipk > 3.5 && mahasiswa.isOrganisasi === true)
//   .map((mahasiswa) => {
//     return {
//       ...mahasiswa,
//       nama: mahasiswa.nama.toUpperCase(),
//       statusKandidat: "LOLOS SELEKSI UTAMA",
//     };
//   })
//   .forEach((dataMahasiswa) => {
//     console.log(
//       `Selamat! ${dataMahasiswa.nama} dengan NIM: ${dataMahasiswa.nim} dinyatakan ${dataMahasiswa.statusKandidat}`,
//     );
//   });

const laporanTransaksiOxa = [
  {
    idTransaksi: "TX-001",
    kasir: "Rian",
    tipePesanan: "Dine-In",
    pesanan: [
      { menu: "Expresso", jumlah: 2, hargaSatuan: 20000 },
      { menu: "Expresso", jumlah: 2, hargaSatuan: 20000 },
    ],
  },
  {
    idTransaksi: "TX-002",
    kasir: "Gita",
    tipePesanan: "Take Away",
    pesanan: [{ menu: "Ice Cafe Latte", jumlah: 1, hargaSatuan: 28000 }],
  },
  {
    idTransaksi: "TX-003",
    kasir: "Rian",
    tipePesanan: "Take Away",
    pesanan: [
      { menu: "Americano", jumlah: 3, hargaSatuan: 22000 },
      { menu: "Brownies", jumlah: 2, hargaSatuan: 20000 },
    ],
  },
  {
    idTransaksi: "TX-004",
    kasir: "Budi",
    tipePesanan: "Dine In",
    pesanan: [{ menu: "Ice Cafe Latte", jumlah: 2, hargaSatuan: 28000 }],
  },
];

let totalHarga = 0;
const transaksiFiltered = laporanTransaksiOxa
  .filter((item) => item.tipePesanan == "Take Away")
  .map((item) => {
    let totalPesanan = 0;

    item.pesanan.forEach((detailPesanan) => {
      totalPesanan += detailPesanan.hargaSatuan * detailPesanan.jumlah;
    });

    return {
      ...item,
      totalBayar: totalPesanan,
    };
  })
  .forEach((item) => {
    console.log(
      `${item.idTransaksi} Melayani Take Away lewat kasir ${item.kasir} dengan total ${item.totalBayar}`,
    );
  });
