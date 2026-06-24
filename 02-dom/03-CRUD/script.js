const inputForm = document.getElementById('input-form');
const input = document.getElementById('input-teks');
const btnTambah = document.getElementById('button-tambah');
const listTugas = document.getElementById('list-tugas');
const btnTheme = document.getElementById('btn-theme');
const body = document.body;


btnTheme.addEventListener("click", ()=>{
    body.classList.toggle('dark-mode')
})


btnTambah.addEventListener("click", ()=>{
    const value = input.value.trim();

    if(value === ""){
        alert("data kosong")
        return
    }

    const liBaru = document.createElement('li');

    const komponenTeks = document.createElement('span');
    komponenTeks.classList.add('teks-tugas');
    komponenTeks.textContent = value;

    const pembungkusTombol = document.createElement('div');

    const tombolEdit = document.createElement('button');
    tombolEdit.classList.add('btn-edit');
    tombolEdit.textContent = "Edit";

    const tombolHapus = document.createElement('button');
    tombolHapus.classList.add('btn-hapus');
    tombolHapus.setAttribute('onclick', 'confirm("Apakah Yakin?")')
    tombolHapus.textContent = "Hapus";

    tombolEdit.addEventListener("click", ()=>{
        komponenTeks.classList.toggle('selesai')
    })

    tombolHapus.addEventListener('click', ()=>{
        liBaru.remove();
    })

    pembungkusTombol.appendChild(tombolEdit);
    pembungkusTombol.appendChild(tombolHapus)

    liBaru.appendChild(komponenTeks);
    liBaru.appendChild(pembungkusTombol);

    listTugas.appendChild(liBaru);

    input.value = "";

})