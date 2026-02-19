//Rotate array by K position
let arr = [1, 2, 3, 4, 5]
let K=2
let n = arr.length


//Handle K>n
K=K%n

for(let r=1; r<=K; r++){
    let first = arr[0];

    for(let i=0; i<n-1; i++){
        arr[i]=arr[i+1]
    }

    arr[n-1] = first
}

console.log(arr)