// let picture = ['01.jpg'];

// function login(username){
//     let token = ~~[Math.random() * 12345678];
//     console.log("Validasi Data.....")
//     return new Promise((success, failed)=>{
        
//             if(username != 'Johannes'){
//                 failed("Wrong Username!")
//             }else{
//                 setTimeout(()=>{
//                     success({token});
//                 },200)
//             }
        
//     })
// }

// function getUser(userToken){
//     console.log("Validasi API Key....")
//     return new Promise((success, failed)=>{
//         if(!userToken){
//             failed("Have No Token, Cannot Access!")
//         } else{
//             setTimeout(()=>{
//                 success({apiKey: 'xkey123'})
//             },500);
//         }
//     })
// }

// function getPicture(apiKey){
//     console.log("Menghasilkan Gambar...")
//     return new Promise((success, failed)=>{
//         if(!apiKey){
//             failed("Api Key Wrong Or Empty")
//         }else{
//             setTimeout(()=>{
//                 success({pic: picture});
//             }, 1500)
//         }
//     })
// }


// async function userInfo(){
//     try{
//         const {token} = await login('Johannes');
//         const {apiKey} = await getUser(token);
//         const {pic} = await getPicture(apiKey);

//         console.log(`${token} \n${apiKey} \n${pic}`);
//     }catch(err){
//         console.log(err)
//     }
// }

// userInfo();



const janjiSaya = new Promise((resolve, rejected)=>{
    let angka = Math.floor(Math.random * 10);
    setTimeout(()=>{
        if(angka > 5){
            resolve("Sukses");
        }else{
            rejected("Gagal")
        }
    }, 2000)
})

janjiSaya.then((hasil)=>{
    console.log(hasil);
})
