//hcf of two number

let a = 36
let b = 80

while(b!==0){
    let remainder = a%b;
    a=b;
    b=remainder
}

console.log("HCF is", a)