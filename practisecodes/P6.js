//find is number is prime or not 
let number = 8
let isPrime = true

if(number<=1){
    isPrime = false
} else{
    for(let i=2; i<number; i++){
        if(number%i===0){
            isPrime = false
            break;
        }
    }
}

if(isPrime){
    console.log("Number is prime")
} else{console.log("Number is not prime")}