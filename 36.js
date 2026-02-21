//check if two string is anagram or not

let str1 = "listen"
let str2 = "silent"

let isAnagram = true

if(str1.length!==str2.length){
    isAnagram = false
}else{
    for(let i=0; i<str1.length; i++){
        let count1 = 0;
        let count2 = 0;

        //count in str1
        for(let j=0; j<str1.length; j++){
            if(str1[i]===str1[j]){
                count1++
            }
        }

        //count in str2
        for(let k=0; k<str2.length; k++){
            if(str1[i]===str2[k]){
                count2++
            }
        }

        if(count1!==count2){
            isAnagram = false
            break;
        }
    }
}

if(isAnagram){
    console.log("Anagram")
}else{
    console.log("Not anagram")
}