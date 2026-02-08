//remove duplicates from array

let array = [1, 2, 2, 3, 3, 4]

let index = 0

for(let i = 0; i<array.length; i++){
    if(array[i]!==array[index]){
        index++;
        array[index] = array[i]
    }
}

//unique element are from  0 to index
for(let i = 0; i<=index; i++){
    console.log(array[i])
}