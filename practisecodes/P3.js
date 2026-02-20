//reverse a number

let number = 1345
let reverse = 0

while(number>0){
    let lastDigit = number%10
    reverse = reverse*10 + lastDigit
    number = Math.floor(number/10)
}

console.log(reverse)