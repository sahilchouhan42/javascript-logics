//revese an array
let array = [1, 2, 3, 4, 5]

function reverse(array){
    let reverseArray = []
    for(let i=array.length-1; i>=0; i--){
        reverseArray[reverseArray.length] = array[i]
    }
    return reverseArray

}

console.log(reverse(array))
