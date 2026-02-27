//length of string

class Solution{
    lengthString(str){
        let count = 0
        for(let i=0; i<str.length; i++){
            count ++
        }
        return count
    }
}

let obj = new Solution()

console.log(obj.lengthString("hello111"))