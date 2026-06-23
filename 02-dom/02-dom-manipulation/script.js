const btnTheme = document.getElementById("btn-theme")
const body = document.querySelector("body");
const btnLulus = document.getElementById("btn-kelulusan");
const kartuMahasiswa = document.getElementById("kartu-mahasiswa");
const statusTeks = document.getElementById("status-teks")

btnTheme.addEventListener("click", ()=>{
    body.classList.toggle('dark-mode');
    if(btnTheme.textContent === "Ubah Ke Dark Mode"){
        btnTheme.textContent = "ubah ke light mode";
    }else{
        btnTheme.textContent = "Ubah Ke Dark Mode"
    }
})

btnLulus.addEventListener("click", ()=>{
    statusTeks.textContent = "Lulus Evaluasi"
    kartuMahasiswa.classList.add("bg-lulus")
    btnLulus.setAttribute('disabled', 'true')
})