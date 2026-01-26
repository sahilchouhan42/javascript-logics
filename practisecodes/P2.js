//reverse a number
let number = 12345
let reverse = 0

while(number>0){
    let lastDigit = number%10;
    reverse = reverse*10 + lastDigit;
    number = Math.floor(number/10)
}

console.log(reverse)

//another merthod
let n = 4567
let reverseNum  = ""

function reverseNumber(n){
    let str = String(n).split("")
    for(let i=str.length-1; i>=0; i--){
        reverseNum+= str[i]
    }
    return Number(reverseNum)
}

console.log(reverseNumber(n))