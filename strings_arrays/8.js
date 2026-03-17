//find the largest number of array

let arr = [1, 2, 3, 4, 5]
let largest = -Infinity


for(let i=0; i<arr.length; i++){
if(arr[i]>largest){
    largest = arr[i]
}
}

console.log(largest)

