function getUser(id){
    return new Promise((resolve, reject)=>{
        if(id === 1){
            const OTP = 12341;
            resolve(OTP);
        }else{
            reject('Id Salah');
        }
    })
}

function getUserOTP(otp){
    return new Promise((resolve)=>{
        resolve(`OTP Anda: ${otp}`);
    })
}

const delay = (ms)=> new Promise(resolve=>setTimeout(resolve, ms));
async function getUserData(){
    console.log("Menunggu Data Dari User....");
    await delay(2000);
    const userId = await getUser(1);

    console.log("Menunggu Proses OTP....")
    await delay(1000);
    const getOTP = await getUserOTP(userId);
    console.log(getOTP);
}

getUserData();