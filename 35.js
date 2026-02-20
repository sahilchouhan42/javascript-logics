//check if number is niven -> 18->1+8=9->18%9=0

let number = 18
let orginal = number
let sum=0

while(number>0){
    let digit = number%10
    sum = sum+digit
    number = Math.floor(number/10)
}

if(sum!==0 && orginal%sum===0){
    console.log('Harshad Number');
} else{
    console.log("Not a harshad number")
}


//another method
function isNumberHarshad(num){
    let sum = 0
    let numStr = (num+"").split("")
    console.log(numStr)
    for(let i=0; i<numStr.length; i++){
        sum= sum + Number(numStr[i])
    }
    if(num%sum===0){
        console.log("Number is harshed")
    } else{
        console.log("Number is not harshed")
    }
    
}

isNumberHarshad(22)