const btnSeduh = document.getElementById('btn-seduh')
const layarTimer = document.getElementById('layar-timer')
let variabel = 0;

btnSeduh.addEventListener("click", ()=>{
    btnSeduh.disabled = true;
    btnSeduh.style.cursor = 'not-allowed';
    let timerSeduh = setInterval(()=>{
        variabel++;
        layarTimer.textContent = variabel;
        if(variabel == 5){
            clearInterval(timerSeduh);
            alert("Kopi telah siap");

                btnSeduh.disabled = false;
                btnSeduh.style.cursor = "pointer";
                variabel = 0;
            }
            layarTimer.textContent = variabel;
    }, 1000)
})