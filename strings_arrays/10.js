//check character count 

let str = "hello"
let frq = {}
let count = 0

for(let i=0; i<str.length; i++){
    let ch = str[i]

    if(frq[ch]){
        frq[ch]=frq[ch]+1
    }else{
        frq[ch]=1
    }
}

for(let key in frq){
    console.log(key + " => " + frq[key])
}