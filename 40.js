let arr1 = [1, 2, 3, 4]
let arr2 = [1,2, 7, 6]

let result = []

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {

            //check duplicate in result 
            var alreadyAdded = false
            for (let k = 0; k < result.length; k++) {
                if (result[k] === arr1[i]) {
                    alreadyAdded = true
                    break
                }
            }
            if (!alreadyAdded) {
                result.push(arr1[i])

            }
        }

    }
}

console.log(result)