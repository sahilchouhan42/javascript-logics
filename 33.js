//remove the duplicate characters in string

let str = "programming"
let result = ""

for(let i=0; i<str.length; i++){
    isDuplicate = false
    for(let j=0; j<result.length; j++){
        if(str[i]===result[j]){
            isDuplicate = true;
            break
        }
    }

    if(!isDuplicate){
        result+=str[i]
    }
}

console.log(result)