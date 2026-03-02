//find the second largest element in array 

let array = [1, 2, 3, 4, 5]
let largest = -Infinity
let secondLargest = -Infinity

function findSecondLargest(array){
    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest
            largest = array[i]
        }

        if(array[i]>secondLargest && array[i]!==largest){
            secondLargest = array[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargest(array))