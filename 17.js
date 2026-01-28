//check if number have power 2

let number = 17; 
let isPowerOfTwo = true 

if(number<=0){
    isPowerOfTwo = false
} else{
    while(number>1){
        if(number%2!==0){
            isPowerOfTwo = false;
            break;
        }
        number = Math.floor(number/2)
    }
}

if(isPowerOfTwo){
    console.log("Yes, Power of 2")
} else{
    console.log("No. not a power of 2")
}