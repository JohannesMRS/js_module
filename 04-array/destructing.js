const angkas = [1,2,3,4,5,6];

const [a,b, ...c] = angkas;
console.log(a);
console.log(b);
console.log(c);


const dataMahasiswa = [
    {nama: "Johannes", kelas: "MI-4B"},
    {nama: "Ronaldo", kelas: "MI-4F"}
]

const [{nama, kelas, ...sisa}] = dataMahasiswa;

console.log(nama);
console.log(kelas);
console.log(sisa);



