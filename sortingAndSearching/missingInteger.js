// given a sorted array of N integers from 1 to N
// given {1, 3, 4, 5}, and N = 5, 
// out: the missing number is 2

const missingInteger = (arr,size) => {
    if(size < 2) return -1;
    let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    // check if middle value is immediately to the left
    if (arr[middle] - 1 !== arr[middle - 1] ||
        (middle == 0 && arr[middle] !== 1) // edge case for beginning of array
      ) {
        return middle + 1;
      }
    // check if middle value is immediately to the right
    if (
      (arr[middle + 1] && arr[middle] + 1 !== arr[middle + 1]) ||
      (middle === arr.length - 1 && arr[middle] !== size) // edge case for end of array
    ) {
      return middle + 2;
    }


    if (arr[middle] != middle + 1) {
      // go left
      right = middle - 1;
    } else {
      // go right
      left = middle + 1;
    }
  }

}

console.log(missingInteger([1, 3, 4, 5], 5));