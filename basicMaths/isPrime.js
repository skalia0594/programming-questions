//given : a number , 31
//out: true

const isPrime = num => {
    if(typeof num !== 'number' || num < 2) {
        return false;
    }
    else if(num === 2) {
        return true;
    }
    else if(num% 2 === 0) {
        return false;
    }
    else {
        for(let i= 3; i< Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
    }
    return true;
}


console.log(isPrime(181));