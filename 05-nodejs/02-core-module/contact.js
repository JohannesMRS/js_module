const fs = require('node:fs');
const { argv } = require('node:process');
const validator = require('validator');
// const readline = require('node:readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

const dirPath = './data';

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const filePath = './data/contact.json';

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf-8');
}


// const pertanyaan = (pertanyaan)=>{
//     return new Promise((resolve, reject)=>{
//         rl.question(pertanyaan, (nama)=>{
//             resolve(nama);
//         })
//     });
// };

const simpanData = (nama, email, noHp)=>{
    const contactInfo = {nama, email, noHp};
    const readContact = fs.readFileSync(filePath, 'utf-8');
    const json = JSON.parse(readContact);

    const duplikat = json.find((contact)=>contact.nama === nama);
    if(duplikat){
        console.log('Kontak Sudah Digunakan!');
        return
    }

    if(email){
        if(!validator.isEmail(email)){
            console.log('Email Tidak Valid');
            return;
        }
    }

    if(noHp){
        if(!validator.isMobilePhone(noHp, 'id-ID')){
            console.log('Nomor HP Tidak Valid, awali dengan 08');
            return;
        }
    }

    json.push(contactInfo);
    const jsonString = JSON.stringify(json);
    fs.writeFileSync(filePath, jsonString);
    console.log('Data Berhasil Di Input');
};


const editData = (nama, email, noHp)=>{
    const filePath = 'data/contact.json';
    const readFile = fs.readFileSync(filePath, 'utf-8');
    const getData = JSON.parse(readFile);

    const item = getData.find(i=>i.email === email);

    if(item){
        item.nama = nama || item.nama;
        item.noHp = noHp || item.noHp;
        fs.writeFileSync(filePath, JSON.stringify(getData, null, 2));
        console.log(`Data Kontak Berhasil Di Update`);
    }else{
        console.log('Item Not Found!');
    }
};

const hapusData = (nama, email, noHp)=>{
    const filePath = 'data/contact.json';
    const readFile = fs.readFileSync(filePath, 'utf-8');
    const getData = JSON.parse(readFile);

    const dataBaru = getData.filter(item=>item.email !== email);

    if(getData.length > dataBaru.length){
        // getData.push(dataBaru);
        fs.writeFileSync(filePath, JSON.stringify(dataBaru, null, 2));
        console.log('Data Berhasil Di Hapus');
    }else{
        console.log('Email Tidak Ditemukan');
    }
}


module.exports = {
    simpanData,
    editData,
    hapusData,
}