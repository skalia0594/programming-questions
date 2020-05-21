//in: 60, 90
//out: 30

const gcd = (num1, num2) => {
    if(num2 === 0) {
        return num1;
    }
    return gcd(num2, num1%num2);
}

console.log(gcd(60,90));