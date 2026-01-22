let N = 5


let factorial = 1

if(N<0){
    console.log("Factorial not defined for negative number")
} else{
    for(let i = 1; i<=N; i++){
        factorial = factorial*i
    }
    console.log(factorial)
}