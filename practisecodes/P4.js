//sum of numbers
let number = 555
let sum = 0

while(number>0){
    let lastDigit = number%10
    sum = sum + lastDigit;
    number = Math.floor(number/10)
}

console.log(sum)

//another method
function sumOfAll(n){
    let sum = 0
    let str = (String(n)).split("")
    for(let i=0; i<str.length; i++){
        sum+= Number(str[i])
        
    }
    return sum
}

console.log(sumOfAll(666))