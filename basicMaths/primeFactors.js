//given: 69
//out: 3,23

const primeFactors = num => {
    if( typeof num !== "number" || num < 2) {
        return [];
    }
    // else if (num ===2) {
    //     return [2];
    // }
    let i = 3,
        res = [];
    while(num % 2 ===0) {
        res.push(2);
        num = num /2;
    }    
    while( num > 2 ) {
        if(num % i === 0) {
            res.push(i);
            num = num/i;
        }
        else{
            i +=2;
        }
    }
    return res;
}

console.log(primeFactors(90));