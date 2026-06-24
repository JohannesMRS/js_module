const tableMain = document.getElementById('table-main');
const tableBody= document.getElementById('table-body');
const btnTambah = document.getElementById('tambah');
const btnEdit = document.getElementById('edit');
const btnHapus = document.getElementById('hapus');

const dataMahasiswa = [
    {nim: 2405, nama: "Johannes", kelas: "MI-4B"},
    {nim: 2406, nama: "John", kelas: "MI-4A"},
    {nim: 2404, nama: "Alex", kelas: "MI-4C"}
];

tableBody.innerHTML = "";

dataMahasiswa.forEach((item)=>{
    tableBody.innerHTML += `<tr>
    <td>${item.nim}</td>
    <td>${item.nama}</td>
    <td>${item.nim}</td>
    <td>
    <button id = "hapus">Hapus</button>
    <button id = "edit">Edit</button>

    </td>
    </tr>`;
})


btnTambah.addEventListener("click", ()=>{

})




