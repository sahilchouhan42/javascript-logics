//sum of all numnber
let number = 345
let sum = 0

while(number>0){
    let lastDigit = number%10
     sum = sum + lastDigit
    number =  Math.floor(number/10)
}

console.log("Sum is", sum)