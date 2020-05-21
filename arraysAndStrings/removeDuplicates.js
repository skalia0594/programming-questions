//in : [1,2,3,4,5,5,5,6,6,7,3,4]
//out: [1,2,3,4,5,6,7]

const removeDuplicates = arr => {
    const res = {}, outArr=[];
    if(arr.length < 0) return outArr;
    for(let i =0; i< arr.length; i++) {
        if(!res[arr[i]]) {
            res[arr[i]] = true;
            outArr.push(arr[i]);
        }
    }
    return outArr;
}

console.log(removeDuplicates([1,1,1,2,2,3,4,5,5,5,6,6,7,3,4,8]));