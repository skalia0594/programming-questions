//given: [1,2,3,6,7,8,11,12,13,45,46,47,48]
//out: ["1-3", "6-8", "11-13", "45-48"]

const consecutiveGroupOfNumbers = arr => {
    if (arr.length < 0) return [];
    const result = [];
    let start = arr[0];
    for(let i= 0; i< arr.length; i++) {
        if(arr[i+1] !== arr[i] + 1) {
            result.push(`${start}-${arr[i]}`);
            start = arr[i+1];
        }
    }
    return result;
}

console.log(consecutiveGroupOfNumbers([1,2,3,6,7,8,11,12,13,45,46,47,48]));