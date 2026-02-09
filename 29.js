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
} else {
    console.log("Number is not palindrom")
}

//another method 
let newNumber = 131
let newStr = newNumber + ""

for(let i=0; i<newStr.length; i++){
    let reverseStr = newStr.split("")
    // console.log(reverseStr)
    // console.log(newStr)
    if(reverseStr[i]===newStr[i]){
        console.log("Number is palindrome")
    } else{
        console.log("Number is not palindrome")
    }
}