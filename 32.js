//check if number is Perfect Number

let number = 12

let sum = 0

for(let i=1; i<number/2; i++){
    if(number%i===0){
        sum = sum + i
    }
}

if(sum===number && number!==0){
    console.log("Perfect Number");
} else{
    console.log("Not a perfect number");   
}