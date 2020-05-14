//Input: "fun&!! time"   return logest word in string ignore puntuations
//Output: time

const longestWord = str => {
    if(str.length < 0) return '';
    const arr = str.split(' ');
    let result = "";
    const pattern = /[^a-z|A-Z|0-9]/g;
    for(let i=0; i< arr.length; i++) {
        const newWord = arr[i].replace(pattern, '');
        if(i==0) {
            result= newWord;
        }
        else if(newWord.length > result.length) {
            result = newWord;
        }
    }
    return result;
}

console.log(longestWord("fun&!!!    time"));