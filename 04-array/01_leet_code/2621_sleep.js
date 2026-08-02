async function sleep(milis){
    return new Promise((resolve)=>{
        setTimeout(resolve, milis);
    })

};
async function main(){
    let t = Date.now();
    await sleep(1000);
    console.log(Date.now()-t)
}

main();