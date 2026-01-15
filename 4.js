//check if number is palindrome

let number = 121
let original = number;
let reverse = 0

while(number>0){
    let lastDigit = number%10;
    reverse = reverse*10 + lastDigit
    number = Math.floor(number/10)
}
console.log(reverse)

if(original===reverse){
    console.log("Palindrome Number")
} else{
    console.log("not a palindrome number")
}


//another method
function isPalindrome(num){
    numStr = (num+"")
    let reverseStr = ""
    console.log(numStr)
    for(i=numStr.length-1; i>=0; i--){
        reverseStr+=numStr[i]
    }

    if(reverseStr===numStr){
        return "number is palindrome"
    } else{
        return "number is not palindrome"
    }
}

console.log(isPalindrome(1441))