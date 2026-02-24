//count frequency of characters in string

let str = "hello"
let freq = {}

for(let i=0; i<str.length; i++){
    let ch = str[i];

    if(freq[ch]){
        freq[ch] = freq[ch]+1
    } else{
        freq[ch]=1
    }
}

for(let key in freq){
    console.log(key + " = > " + freq[key])
}