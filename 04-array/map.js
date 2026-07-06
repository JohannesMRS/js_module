const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Zaky", kelas: "MI-4B"},
    {nama: "Riah", kelas: "MI-4A"},
    {nama: "Monica", kelas: "MI-4E"}
]

const mahasiswaMapped = dataMahasiswa.map(item=>item.nama)
console.log(mahasiswaMapped)