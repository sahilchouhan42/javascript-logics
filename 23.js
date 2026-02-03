let number = 12345

function findEvenAndOdd(number){
    let even = 0
    let odd = 0
    let str = (""+number).split("")
    for(let i=0; i<str.length; i++){
        if((str[i]%2===0)){
            even ++
        }
        if((str[i]%2!==0)){
            odd++
        }
    }

    return {even, odd}
}

console.log(findEvenAndOdd(number))


//another method
let newNumber = 122445
let evenCount = 0
let oddCount = 0

while(newNumber>0){
    let digit = newNumber%10
    if(digit%2===0){
        evenCount++
    } else{
        oddCount++
    }

    newNumber = Math.floor(newNumber/10)
}

// console.log("Even count is", evenCount)
// console.log("Odd count is", oddCount)