//find the second largest

let array = [1, 22, 44, 55,77, 32]
let largest  = -Infinity
let secondLargest= -Infinity

for(let i=0; i<array.length; i++){
    if(array[i]>largest){
        secondLargest = largest
        largest = array[i]
    } else if(array[i]>secondLargest&& array[i]!==largest){
        secondLargest = array[i]
    }
}

console.log("Second largest is", secondLargest)

// let arr = [10, 5, 20, 8];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > largest) {
//         secondLargest = largest;
//         largest = arr[i];
//     }

//     else if (arr[i] > secondLargest && arr[i] !== largest) {
//         secondLargest = arr[i];
//     }
// }

// console.log("Second Largest:", secondLargest);
