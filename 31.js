//moving all zeros to next

let array = [0, 1, 0, 3, 12]

let index = 0

//moving non-zero element forward
for(let i=0; i<array.length; i++){
    if(array[i]!==0){
        array[index] = array[i];
        index++
    }
}

//fill remaining position with o
for(let i=index; i<array.length; i++){
    array[i] = 0
}

console.log(array)