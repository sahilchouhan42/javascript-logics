
let array = [1, 2, 3, 5]
let n = array.length+1

//expectedsum
let expectedSum = n*(n+1)/2
console.log("expected sum is", expectedSum)

//actual sum
let actualSum=0
for(let i=0; i<array.length;i++){
    actualSum+=array[i]
}
console.log('actual sum is', actualSum)

//missing number
let missing = expectedSum-actualSum
console.log("missing number is", missing)
