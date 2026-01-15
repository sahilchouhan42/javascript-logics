//sum of numbers

let number = 123
let sum = 0

while(number>0){
    let lastDigit = number%10
    sum = sum + lastDigit
    number = Math.floor(number/10)
}

console.log(sum)

//another method
function sumOfAllNumbers(num){
    let numStr = (num+"").split('')
    let sumofAll = 0
    for(let i=0; i<numStr.length; i++){
        sumofAll+=  Number(numStr[i])
    }
    return sumofAll
}

console.log(sumOfAllNumbers(344))