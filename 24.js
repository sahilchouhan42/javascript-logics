let str = "madam"

function isPalindrom(str){
    let reverseStr = ""
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i]
    }
    reverseStr===str?console.log("String is Palindrome"): console.log("String is not palindrome")
}

(isPalindrom(str))

//another method
let newStr = "madam"
let start = 0
let end = newStr.length-1
let isNewPalindrom = true

while(start<end){
    if(newStr[start]!==newStr[end]){
        isNewPalindrom = false
    break;}
    start++
    end--
}

if(isNewPalindrom){
    console.log("Palindrome")
} else{
    console.log("Not Palindrome")
}