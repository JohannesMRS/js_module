const arr = [1,2,3,4,5];

const maximum = Math.max(...arr);
const minimum = Math.min(...arr);
console.log(maximum)
console.log(minimum)


const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Ronaldo", kelas: "MI-4F"}
]

const tambahMahasiswa = [
    ...dataMahasiswa,
    {nama: "Neymar", kelas: "MI-4C"}
]

console.log(tambahMahasiswa)