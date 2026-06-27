// const wadahMenu = document.getElementById('wadah-menu');

// wadahMenu.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('btn-pilih')){
//         const namaKopi = e.target.getAttribute('data-nama');
//         alert(`Kamu memilih ${namaKopi}`)
//     }
// })

// const containerMeja = document.getElementById('container-meja');

// containerMeja.addEventListener('click', (e)=>{
//     if(e.target.classList.contains('btn-kosongkan')){
//         const dataMeja = e.target.getAttribute('data-meja');
//         e.stopPropagation();
//         alert(`Meja No ${dataMeja} telah dikosongkan`)
//     }else if(e.target.closest('.kartu-meja')){
//         const kartuMeja = e.target.closest('.kartu-meja');
//         const noMeja = kartuMeja.getAttribute('data-meja');
//         alert(`Melihat data meja no ${noMeja}`)
//     }
// })


const pembungkusTombol = document.getElementById('pembungkus-tombol');

pembungkusTombol.addEventListener('click', (e)=>{
    if(e.target.classList.contains('btn-kategori')){
        const dataKategori = e.target.getAttribute('data-kategori');
        alert(`Menampilkan menu kategori ${dataKategori}`);
    }else if(e.target.classList.contains('btn-diskon')){
        const dataPromo = e.target.getAttribute('data-id-promo');
        e.stopPropagation();
        alert(`Kode Promo ${dataPromo} Aktif`);
    }
})