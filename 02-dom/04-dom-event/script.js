const formPendaftaran = document.getElementById('form-pendaftaran');
const inputNama = document.getElementById('input-nama');
const inputNim = document.getElementById('input-nim');
const errorNim = document.getElementById('error-nim');
const btnSubmit = document.getElementById('btn-submit');
const notification = document.getElementById('notif');


inputNama.addEventListener('input', ()=>{
    if(inputNama.value.length < 6){
        errorNim.style.display = 'block';
        btnSubmit.setAttribute('disabled');
    }else{
        errorNim.style.display = 'none';
        btnSubmit.removeAttribute('disabled')
    }
})

formPendaftaran.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputValue = inputNama.value;
    notification.style.display = 'block';
    notification.innerHTML = `Selamat, ${inputValue} Dengan NIM ${inputNim.value} Pendaftaran WebDev kamu Berhasil Di Kirim `;
    formPendaftaran.reset();
})