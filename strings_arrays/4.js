//check if array is sorted or not

let array = [1, 6, 3, 4, 5]
let sorted = true

for(let i=0; i<array.length; i++){
    if(array[i]>array[i+1]){
        sorted = false
        break
    }
}

if(sorted){
    console.log('Sorted')
} else{
    console.log("Not sorted")
}

