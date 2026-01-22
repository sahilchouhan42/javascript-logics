let number = 30
let isPrime = true

if(number<=1){
    isPrime=false
} else{
    for(let i=2; i*i<=number; i++){
        if(number%i===0){
            isPrime = false
            break;
        }
    }
}

if(isPrime) console.log("Prime Number")
    else console.log("Not a prime number")