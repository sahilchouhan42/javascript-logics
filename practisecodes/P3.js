//check if number is palindrome
let number = 123;
let original = number;
let reverse = 0

while(number>0){
    let lastDigit = number%10
    reverse = reverse*10 + lastDigit;
    number = Math.floor(number/10)
}

console.log(reverse)

if(reverse===original){
    console.log("Number is palindrome")
} else{
    console.log("Number is not palindrome")
}

//another method 

let newNumber = 151

function isPalindrome(n){
    let Str = String(n).split("")
    console.log(Str)
    let reverseNum = 0
    for(let i=Str.length-1; i>=0; i--){
        reverseNum = reverseNum + (Str[i])
        reverseNum = Number(reverseNum) 
        console.log(reverseNum)
    }

    if(reverseNum===n){
        return "Number is palindrome"
    } else{
        return "Number is not palindrome"
    }
}

console.log(isPalindrome(newNumber))
