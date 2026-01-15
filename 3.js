//revrse a number 

// let number = 1234
// let reverse  = 0

// while(number>0){
//     let lastDigit = number%10
//     reverse = reverse*10+lastDigit
//     number = Math.floor(number/10)
// }
// console.log(reverse)


//using string
function reverseNumber(num){
    let numStr = (num+"").split('')
    // console.log(numStr, typeof numStr)
    let reverseNum = 0
    for(i=numStr.length-1; i>=0;i--){
        reverseNum = reverseNum+ numStr[i]
    }
    return reverseNum
}

console.log(reverseNumber(4567))