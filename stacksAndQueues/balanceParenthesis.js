//in: [()]{}{[()()]()}
//out: true

const balancedParenthesis = str => {
    if(str === null || str.length === 0) return true;
    if(str.length ===1 ) return false;
    const openBrackets = ['(', '[', '{'];
    const matchedBrackets = {'(':')', '[':']', '{':'}'};
    const arr = [];
    for(let i=0 ; i< str.length; i++) {
        const char = str[i];
        if(openBrackets.includes(char)) {
            arr.push(char);
        }else{
            if(arr.length< 1) return false;   // first element is closing bracket
            const lastElement = arr.pop();
            if (char !== matchedBrackets[lastElement]) return false;
        }
    }
    if (arr.length > 0) return false; // not matched last braces
    return true;
}

console.log(balancedParenthesis('[(])'));