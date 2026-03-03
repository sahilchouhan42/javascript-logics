let array = [0, 1, 0, 2, 3]

function moveZeros(array){
    let index = 0
    //moving non zero element forward
    for(let i=0; i<array.length; i++){
        if(array[i]!==0){
            array[index] = array[i]
            index++
        }
    }

    //fill remaining posotion with 0
    for(let i=index; i<array.length; i++){
        array[i] = 0
    }

    return array
}

console.log(moveZeros(array))