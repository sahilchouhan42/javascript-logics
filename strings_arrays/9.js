let a = [1, 2, 3, 4, 5]
let temp = a[0]

for(let i=0; i<a.length; i++){
    a[i]=a[i+1]
}

a[a.length-1]=temp

// console.log(a)

let arr = [1, 2, 3, 4, 5]
let temp2 = arr[arr.length-1]

// for(let i=arr.length-1; i>=0; i--){
//     arr[arr.length-1]=arr[i]
// }

for(let i=0; i<arr.length; i++){
    arr[i]=arr[i+1]
}
arr[0]=temp2

// console.log(arr)

let arr3 = [1,2,3,4,5]

let tempA= arr3[arr3.length-1]
let tempB= arr3[arr3.length-2]

for(let i=arr3.length-1; i>=2;i--){
    
}