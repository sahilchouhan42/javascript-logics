//first non repeating character of string

let str = "swwinss"
let found = false

for(let i=0; i<str.length; i++){
    let count = 0
    for(let j=0; j<str.length; j++){
        if(str[i]===str[j]){
            count++
        }
    }

    if(count===1){
        console.log("First non repeating character is: ", str[i])
        found = true;
        break;
    }

    
}

if(!found){
        console.log("No Non repeating character")
    }