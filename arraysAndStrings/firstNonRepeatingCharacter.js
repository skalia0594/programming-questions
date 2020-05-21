//in : "the quick brown fox jumps then quickly blow air"
//out: 'f'

const firstNonReapeatingCharacter = str => {
    if(str.length < 2) return str; 
    const characters = {};
    for(let i=0; i< str.length; i++) {
        const char = str[i];
        if (char === ' ') continue;
        if(!characters[char]) {
            characters[char] = 1;
        }else {
            characters[char] +=1;
        }
    }
    for(let key in characters) {
        if(characters[key] === 1) return key;  // first occurence
    }
}
console.log(firstNonReapeatingCharacter("the quick brown fox jumps then quickly blow air"));