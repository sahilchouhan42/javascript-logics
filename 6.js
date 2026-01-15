//armsstrong number

let number = 153
let original = number

//count digits
let temp = number
let digits = 0;

while(temp>0){
    digits++;
    temp = Math.floor(temp/10)
}

//armstrong calculation
temp = number
let sum = 0

while(temp>0){
    let digit = temp %10

    //digit^digit;  (without  math.pow)
    let power = 1
    for(let i=1; i<=digits; i++){
        power = power*digit
    }

    sum = sum + power
    temp = Math.floor(temp/10)
}

//compare
// if(sum===original){
//     console.log("Armstrong number")
// } else{
//     console.log("not an armstrong number")
// }


//another method

function isArmstrongNumber(num){
    let numStr = (num+"").split('')
    // console.log(numStr)
    let sum = 0
    for(let i=0; i<numStr.length; i++){
        sum += Number(numStr[i]**3)
    }
    if(sum===num){
        return "Number is Armstrong"
    } return "Number is not armstong"
}

// console.log(153)
// console.log(isArmstrongNumber(153))
console.log(isArmstrongNumber(123))
