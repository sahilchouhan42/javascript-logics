//check the string is palindrome or not 

let str = "hello"
let left = 0
let right = str.length-1
let palindrome = true
function isPalindrome(str){
    
    while(left<right){
        if(str[left]!==str[right]){
            palindrome = false
            break;
        }
        left++
        right--
    }

    if(palindrome){
        console.log("Palindrome")
    }else{
        console.log("Not palindrome")
    }
}

isPalindrome("hello")