//find the longest word is string

let str = "Js is very powerfull"

let maxLength = 0
let longestWord = "";
let currentWord = ""

for (let i=0; i<str.length; i++){
    if(str[i]!==" "){
        currentWord = currentWord+ str[i]
    }else{
        if(currentWord.length>maxLength){
            maxLength  = currentWord.length;
            longestWord = currentWord
        }
        currentWord= ""
    }
}

//last word check (important)
if(currentWord.length>maxLength){
    longestWord = currentWord
}

console.log("Longest Word", longestWord);
