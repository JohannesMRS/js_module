const cekGenap = (x)=>{
    if(x % 2 == 0){
        return true
    }
    return false;
}

console.log(cekGenap(5))


function counter(){
    let hitung = 0;

    return function(){
        hitung = hitung + 1;
        return hitung;
    }
}

const counter1 = counter();
console.log(counter1())
console.log(counter1())
console.log(counter1())
console.log(counter1())

const counter2 = counter();
console.log(counter2())


function total(...a){
    let hasil = 0;
    for(let nilai of a){
        hasil += nilai;
    }
    return hasil;
}

console.log(total(5, 10, 15, 20))


function tambahLima(x){
    return x + 5;
}

function kaliTiga(x){
    return x * 3
}


function gabungkan(callBackSatu, callBackDua){
    return function(x){
        return callBackDua(callBackSatu(x));
    }
}

const proses = gabungkan(tambahLima, kaliTiga);
console.log(proses(2));