const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Zaky", kelas: "MI-4B"},
    {nama: "Riah", kelas: "MI-4A"},
    {nama: "Monica", kelas: "MI-4E"}
]

const mahasiswaFiltered = dataMahasiswa.filter((item)=>item.kelas == "MI-4B");
console.log(mahasiswaFiltered)