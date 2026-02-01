//check vowels in string
 let str = "hellomeena"
  function checlVowls(str){
    let vowel = "aeiou"
    let count = 0
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowel.length; j++){
            if(str[i]==vowel[j]){
                count ++
            }
        }
    }
    return count
  }

  console.log(checlVowls(str))