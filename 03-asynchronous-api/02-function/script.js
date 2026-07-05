// function volumeKubus(a, b){
//     kubus1 = a * a * a;
//     kubus2 = b * b * b;
//     return kubus1 + kubus2;
// }

// console.log(volumeKubus(8, 3))


// Arguments

// function argumentsExample(){
//     return arguments;
// }

// const valueArguments = argumentsExample(1,2,"Hai",false);

// console.log(valueArguments)

function argumentsBanyakNilai(){
    let hasil = 0;
    for(let i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

const valueArguments = argumentsBanyakNilai(1,2,3,4,20)
console.log(valueArguments)