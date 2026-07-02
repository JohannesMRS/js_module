// // console.log("Admin Menerima Data")

// // setTimeout(()=>{
// //     console.log("Data Sedang Di Proses....")
// // }, 3000)

// // console.log("Data Selesai Di Proses")



// setInterval(()=>{
//     console.log("Aku tak tahu apa yang terjadi")
// }, 900)


function fetchData(callback){
    setTimeout(()=>{
        const data = {nama: "Andi", role: "Developer"};
        callback(data);
    }, 3000);
}


fetchData((user)=>{
    console.log("Data Berhasil Diambil", user);
})