let N = 3
let factorial = 1

if(N<0){
    console.log("Factorial of negative number is not defined")
} else{
    for(let i = 1; i<=N; i++){
        factorial = factorial*i
    }
    console.log(factorial)
}