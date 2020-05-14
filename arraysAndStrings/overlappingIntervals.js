// given: [ [1,3], [5,7], [2,4], [6,8] ]
//out: [ [1,4], [5,8] ]

const overlappingIntervals = arr => {
    if(arr.length < 0) return [];
    // if unorder arr then sort it
    arr.sort((x,y) => x[0]-y[0]);
    
    const result = [];
    result.push(arr[0]);
    //check overlapping
    for(let i=1; i< arr.length; i++) {
        const topInterval = result[result.length-1];
        if(arr[i][0] < topInterval[1]) {
            topInterval[1] = Math.max(topInterval[1], arr[i][1]);
        }else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("normal case: ", overlappingIntervals([[1,3], [5,7], [2,4], [6,8]]));
console.log("mathMax case:", overlappingIntervals([[1,10], [5,7], [2,4], [6,8]]));