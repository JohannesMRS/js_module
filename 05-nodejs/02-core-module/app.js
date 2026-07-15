const fs = require('node:fs');
const readline = require('node:readline');

// console.log(fs);

// fs.writeFileSync('test.txt', 'Hello Guys'); // Synchronous

// fs.writeFile('test.txt', 'Hello Guys Dengan Asynchronous', (err)=>{
//     console.log(err);
// });

// const readFile = fs.readFileSync('test.txt', 'utf-8');

// console.log(readFile);

// const readFile = fs.readFile('test.txt', 'utf-8', (err, data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log(data);
//     }
// })

// const {stdin: input, stdout: output} = require('node:process');

// const rl = readline.createInterface({input, output});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Masukkan Nama Anda: ', (nama)=>{
    rl.question('Masukkan Usia Anda: ', (usia)=>{
        const contactInfo = {nama, usia};
        const readContact = fs.readFileSync('contact.json', 'utf-8');
        const json = JSON.parse(readContact);
        json.push(contactInfo);
        const jsonString = JSON.stringify(json);
        fs.writeFileSync('contact.json', jsonString);
        rl.close();
    })
})

