//in : "shubham"
//out : length of arr of string

const stringPermutations = str => {
    let arr = str.split('');
    let pickedOne, rest;
    let newArr = [],result = [];

    if(arr.length === 0) {
        return [str];
    }
    for(let i= 0 ; i< arr.length; i++) {
        newArr = [...arr];
        pickedOne = newArr.splice(i,1);
        rest = stringPermutations(newArr.join(''));
        for(let j=0; j< rest.length; j++) {
            const word= pickedOne.concat(rest[j]);
            result.push(word.join(''));
        }
    }
    return result;
}
console.log(stringPermutations('good'));