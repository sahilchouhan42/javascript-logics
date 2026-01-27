//lcm through GCD
function gcd(a, b){
    while(b!==0){
        let remainder = a%b;
        a=b
        b=remainder
    }
    return a
}

function lcm(a, b){
    return (a*b)/gcd(a, b)
}

let a = 12;
let b = 15;

console.log("LCM is:", lcm(a, b))