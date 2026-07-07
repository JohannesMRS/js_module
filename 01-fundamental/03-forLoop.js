// const jumlah = 5;

// for(let i = 0; i < jumlah; i++){
//     for(let j = 0; j <= i; j++){
//        process.stdout.write("*");
//     }
//     console.log();
// }

// for(let i = jumlah; i >= 0; i--){
//     for(let j = 0; j <= i; j++){
//        process.stdout.write("*");
//     }
//     console.log();
// }


const jumlah = 6;

for(let i = 0; i < jumlah; i++){
    for(let j = 0; j <= i; j++){
        process.stdout.write(" ")
    }
    for(let k = jumlah-i; k > 0; k--){
        process.stdout.write("*")
    }
    console.log();
}

for(let i = jumlah; i > 0; i--){
    for(let j = 0; j < i; j++){
        process.stdout.write(" ")
    }
    for(let k = jumlah-i; k >= 0; k--){
        process.stdout.write("*")
    }
    console.log();
}


