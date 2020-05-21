//in : 12  --upto 12th index get the fibonacci number 
//out: 144
let res = [];
const fibonacci = num => {
    if (num <= 1) 
        return num;
    else
        return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(12));