//in: ([6,4,3,2,1,7], 9)
//out: [0,2]  // first occurence of indexes of array that sum 9 

//Brute force is easy

//more optimize solution
const twoSum = (arr,sum) => {
    if(arr.length < 1 || sum === '') return false; 
    const temp ={};
    for(let i=0; i< arr.length; i++) {
        const diff = sum - arr[i];
        if(!temp[diff]) {
            temp[arr[i]] = true;
        }else{
            return [arr.indexOf(diff), i];
        }
    }
    return false;
} 

console.log(twoSum([6,4,5,6,1,7], 8));