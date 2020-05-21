//in: n=100
//out: 11   -- number of zeros from 1 to n

const countZeros = num => {
    if (num <= 9) return 0;
    const reduce = Math.floor(num / 10);
    return  reduce + countZeros(reduce);
}

console.log(countZeros(100));