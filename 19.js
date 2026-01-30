//largest number

function findLargest(array){
    let n= array.length;
    let largest = array[0]

    for(let i=0; i<=n; i++){
        if(array[i]>largest){
            largest = array[i]
        }
    }
    return largest
}

console.log(findLargest([1, 4, 5, 77,55]))