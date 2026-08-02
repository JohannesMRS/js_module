const chunk = function(arr, size){
    let val = [];
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < size; j++){
            val.push(arr[j]);
        }
    }
    console.log(val);
}

const arr = [1,2,3,4,5];
const size = 3;

chunk(arr, size);