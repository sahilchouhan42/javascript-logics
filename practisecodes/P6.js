//check if number is armstrong
let number = 153
let original = number

//count digits
let temp = number
let digits = 0;

while(temp>0){
    digits++
    temp = Math.floor(temp/10)
}

//armstrong calculation
temp = number
let sum = 0

while(temp>0){
    let digit = temp%10

    //digit^digit
    let power = 1
    for(let i=1; i<=digits; i++){
        power = power*digit
    }

    sum = sum+power
    temp = Math.floor(temp/10)
}

//compare
if(sum===original){
    console.log("Armstrong number")
} else{
    console.log("Not an armstrong number")
}