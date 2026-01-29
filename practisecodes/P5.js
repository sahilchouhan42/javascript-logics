//is number armsstrong

let number = 153

function isArmstrongNumber(number){
    let numStr = (""+number).split("")
    // console.log(numStr)
    let sum = 0
    for(let i=0; i<numStr.length; i++){
        sum += Number(numStr[i]**3)
    }
    return sum
}

console.log((1**3)+(5**3)+(3**3))
console.log(isArmstrongNumber(number))