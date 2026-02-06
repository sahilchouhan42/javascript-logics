let N = 500

for (let num=1; num<=N; num++){
    let original = num

    //step 1: count digits
    let digits = 0;
    let temp = num;

    while(temp>0){
        digits++
        temp = Math.floor(temp/10)
    }

    //caluclate armstrong sum
    temp=num
    let sum=0

    while(temp>0){
        let digit = temp%10

        //digit ^ digits (manual)
        let power = 1
        for(let i=1; i<=digits; i++){
            power = power*digit
        }

        sum = sum + power
        temp = Math.floor(temp/10)
    }

    //strp-3 compare
    if(sum===original){
        console.log(original)
    }
}