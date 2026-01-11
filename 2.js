//digit counting

let number = 12345
let count = 0

if(number===0){
    count = 1
} else{
    while(number>0){
        number = Math.floor(number/10);
        count++
    }
}

console.log(count)

//my method 

function countDigit(num){
    let count = 0;
    let newNum = (num+"").split("")
    
    for(let i=0; i<newNum.length; i++){
        count++
    }
    return count
}

console.log(countDigit(12345))