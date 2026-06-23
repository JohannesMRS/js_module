// const btnTheme = document.getElementById("btn-theme")
// const body = document.querySelector("body");
// const btnLulus = document.getElementById("btn-kelulusan");
// const kartuMahasiswa = document.getElementById("kartu-mahasiswa");
// const statusTeks = document.getElementById("status-teks")

// btnTheme.addEventListener("click", ()=>{
//     body.classList.toggle('dark-mode');
//     if(btnTheme.textContent === "Ubah Ke Dark Mode"){
//         btnTheme.textContent = "ubah ke light mode";
//     }else{
//         btnTheme.textContent = "Ubah Ke Dark Mode"
//     }
// })

// btnLulus.addEventListener("click", ()=>{
//     statusTeks.textContent = "Lulus Evaluasi"
//     kartuMahasiswa.classList.add("bg-lulus")
//     btnLulus.setAttribute('disabled', 'true')
// })


// Case 2
const containerPesanan = document.getElementById("pesanan-container");
let kartuHTMl = "";


const laporanTransaksiOxa = [
  { idTransaksi: "TX-001", kasir: "Rian", tipePesanan: "Dine In", totalBayar: 65000 },
  { idTransaksi: "TX-002", kasir: "Gita", tipePesanan: "Take Away", totalBayar: 28000 },
  { idTransaksi: "TX-003", kasir: "Rian", tipePesanan: "Take Away", totalBayar: 106000 },
  { idTransaksi: "TX-004", kasir: "Budi", tipePesanan: "Dine In", totalBayar: 56000 }
];

laporanTransaksiOxa.forEach((l)=>{
    let kelasWarna = l.tipePesanan === "Dine In" ?  "dine-in" : "take-away"; 
    kartuHTMl += `
    <div class = "card-pesanan">
        <span class = "id-tx">${l.idTransaksi}</span>
        <h3 class = "nama-kasir">Kasir: ${l.kasir}</h3>
        <span class = "tipe-badge ${kelasWarna}">Tipe: ${l.tipePesanan}</span>
        <p class = "total-harga">Total: Rp ${l.totalBayar}</p>
    </div>
    `
})


containerPesanan.innerHTML = kartuHTMl


