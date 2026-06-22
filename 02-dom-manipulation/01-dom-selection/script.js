const judul = document.getElementById("nama-kelas");
const btn = document.getElementsByTagName("button");
const btnConvert = [...btn];

const btnShow = document.getElementById("tampilkan");
const listData = document.getElementById("listData");
const showLulus = document.getElementById("showLulus");

const databaseMahasiswa = [
  {
    nama: "rian hidayat",
    ipk: 3.8,
    isOrganisasi: true,
    nim: "240101",
    status: "Lulus",
  },
  {
    nama: "sari utami",
    ipk: 3.2,
    isOrganisasi: true,
    nim: "240102",
    status: "Belum Lulus",
  },
  {
    nama: "toni perkasa",
    ipk: 3.9,
    isOrganisasi: false,
    nim: "240103",
    status: "Lulus",
  },
  {
    nama: "gita lestari",
    ipk: 3.7,
    isOrganisasi: true,
    nim: "240104",
    status: "Belum Lulus",
  },
  {
    nama: "budi santoso",
    ipk: 3.4,
    isOrganisasi: false,
    nim: "240105",
    status: "Belum Lulus",
  },
];

judul.textContent = "Dashboard Evaluasi Polmed";

// btnShow.addEventListener("click", () => {
//   databaseMahasiswa.forEach((item) => {
//     document.write("Nama: ", item.nama, "<br>");
//     document.write("Nama: ", item.ipk, "<br>");
//     document.write("Nama: ", item.isOrganisasi, "<br>");
//     document.write("Nama: ", item.nim, "<br>");
//     document.write("----------------------------------------");
//     document.write("</br>");
//   });
// });

let gabungan = "";

btnShow.addEventListener("click", () => {
  listData.innerHTML = "";
  databaseMahasiswa.forEach((item) => {
    listData.innerHTML += `<p>Nama:${item.nama}<br>IPK: ${item.ipk}<br>Status: ${item.status}</p>`;
  });
});

showLulus.addEventListener("click", () => {
  listData.innerHTML = "";
  databaseMahasiswa
    .filter((item) => item.status === "Lulus")
    .forEach((item) => {
      listData.innerHTML += `<p>Nama: ${item.nama} <br>IPK: ${item.ipk} <br> Status: ${item.status}</p>`;
    });
});
