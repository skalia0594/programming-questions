const fibonacciUsingRecursion = (num, f) => {   //O(2^n)
    if(!f) f = 0;
    if(num < 2) f= num;
    else{
        f = fibonacciUsingRecursion(num-1, f) + fibonacciUsingRecursion(num-2, f);
    }
    return f;
}

// console.time(fibonacciUsingRecursion);
// const ans = fibonacciUsingRecursion(30);
// console.timeEnd(fibonacciUsingRecursion); //19.5 ms
// console.log(ans);

const memo = {};
const fibonacciUsingMemorization = (num, f) => {            //O(n)
    if(!f) f = 0;
    if(memo[num]) return memo[num];
    if(num < 2) f= num;
    else{
        f = fibonacciUsingMemorization(num-1, f) + fibonacciUsingMemorization(num-2, f);
    }
    memo[num] = f;
    return f;
}

console.time(fibonacciUsingMemorization);
const ans1 = fibonacciUsingMemorization(30);
console.timeEnd(fibonacciUsingMemorization); //0.175 ms
console.log(ans1);
