//in: [1,2,3,11,5,6,17,8,9]
//out: 28   -- largest sum of two elements

const maximumSum = arr => {
    if(arr.length < 2) return 0;
    let maxSum= arr[0] + arr[1], maxNum = arr[0]> arr[1]? arr[0]: arr[1];
    for(let i=2; i < arr.length; i++) {
        maxSum = Math.max(maxSum, maxNum+arr[i] );
        maxNum = Math.max(arr[i], maxNum );
    }
    return maxSum;
}

console.log(maximumSum([1,2,3,11,5,6,17,8,9]));