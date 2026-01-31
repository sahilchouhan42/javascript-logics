//check if array is sorted or not

const array = [1, 2, 5,3, 4, 5]
let isSorted = true;

for (let i=0; i<array.length-1; i++){
    if(array[i]>array[i+1]){
        isSorted = false
        break;
    }
}

if(isSorted){
    console.log("array is sorted")
} else{
    console.log("array is not sorted")
}