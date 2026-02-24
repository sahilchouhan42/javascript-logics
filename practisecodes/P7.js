//check number is prime or not

let number = 9
let isPrime = true

if(number<=1){
    isPrime = false
}else{
    for(let i=2; i<number; i++){
        if(number%i===0){
            isPrime = false
            break;
        }
    }
}

if(isPrime){
    console.log("Prime Number")
} else {
    console.log("Not a prime number")
}