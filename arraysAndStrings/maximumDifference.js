//Maximum difference between two elements such that larger element appears after the smaller number
//Input : arr = {2, 3, 10, 6, 4, 8, 1}
//Output : 8

const maximumDifference = arr => {
    if(arr.length < 2) return -1; 
    let minElement = arr[0];
    let maxDiff = arr[1] - arr[0];
    for(let i=1 ; i< arr.length; i++) {
        maxDiff = Math.max(maxDiff, arr[i] - minElement);
        minElement = Math.min(minElement, arr[i]);
    }

    return maxDiff;
}

console.log(maximumDifference([2, 3, 10, 6, 4, 8, 1]));