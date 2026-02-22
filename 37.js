//find the missing number in array
 
let arr = [1, 2, 4, 5]
let n = arr.length +1

//expexted sum
let expectedSum = n*(n+1)/2
console.log("expected Sum is",expectedSum)

//actual sum
let actualSum = 0
for(let i=0; i<arr.length; i++){
    actualSum+=arr[i]
}
console.log("actual Sum is",actualSum)

//mising number
let missing =expectedSum-actualSum
console.log("Missing number is", missing)