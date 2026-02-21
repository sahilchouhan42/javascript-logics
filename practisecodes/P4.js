//check if number is palindrom

let number = 121
let original = number
let reverse = 0

while(number>0){
    let digit = number%10
    reverse = reverse*10 + digit
    number = Math.floor(number/10)
}

if(reverse===original){
    console.log("Number is palindrome")
} else{
    console.log("Number is not palindrom")
}