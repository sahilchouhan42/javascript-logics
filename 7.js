let number = 7
let isPrime = true

if(number<=1){
    isPrime=false
} else{
    for(let i=2; i<number; i++){
        if(number%i===0){
            isPrime = false;
            break
        }
    }
}

if(isPrime){
    console.log('Prime Number')
} else{
    console.log("Not a prime number")
}


//another method

function isPrimeNumber(num){
    if(num%1===0 && num%num===0 && num%2!==0){
        return "Number is Prime"
    } 
    return "Number is not prime"
}

console.log(isPrimeNumber(27))
