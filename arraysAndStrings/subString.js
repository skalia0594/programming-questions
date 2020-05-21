//in : 'shubhamkalia', 'hu'
//out: ["1-2"]  ---index of substring

const getSubString = (str, subStr) => {
    if(str === '' || subStr === '') return false;
    for(let i=0 ; i< str.length; i++) {
        if(str[i] === subStr[0] && str.length -i >= subStr.length ) {
            if(str.substring(i, i+subStr.length) === subStr){
                return [`${i}-${i+subStr.length-1}`];
            }
        }
    }
    return false;
}

console.log(getSubString('shubhamkalia', 'kal'));