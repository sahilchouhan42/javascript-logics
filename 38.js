//check if number is strong number
//145=> 1! + 4! + 5! = 145 which is equal to number itself

let number = 145
let orginal = number
let sum = 0

while(number>0){
    let digit = number%10
    //factorial of digit
    let fact = 1;
    for(let i=1; i<=digit; i++){
        fact = fact*i
    }

    sum= sum + fact
    number = Math.floor(number/10)
}

if(sum===orginal){
    console.log("Strong number")
} else{
    console.log("Not a strong number")
}