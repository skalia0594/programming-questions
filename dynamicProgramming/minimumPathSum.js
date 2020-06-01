// in : 
const a = [
            [1, 3, 1], 
            [1, 5, 1], 
            [4, 2, 1]
        ];
// out: 7

const minimumPathSum = arr => {
    const result = [[arr[0][0]]];
    for(let i =1 ; i< arr.length; i++) {
        result.push([arr[i][0] + result[i-1][0]]);
    }
    for(let i =1 ; i< arr[0].length ; i++) {
        result[0][i] = arr[0][i] + result[0][i-1]
    }
    for(let i =1 ; i< arr.length; i++ ) {
        for(let j =1; j< arr[0].length; j++) {
            result[i][j] = Math.min(result[i-1][j], result[i][j-1]) + arr[i][j];
        }
    }
    return result[result.length-1][result[0].length-1];
}

console.log(minimumPathSum(a));