//digit counting
let n = 123456
let count = 0

if(n===0){
    count=1
}else{
    while(n>0){
        n = Math.floor(n/10)
        count++
    }
}

console.log(count)

//anoter methd
 let number = 1234567

 function countDigit(number){
    let count = 0
    let str = String(number).split('')
    for(let i=0; i<=str.length-1; i++){
        count++
    }
    return count
 }

 console.log(countDigit(number))