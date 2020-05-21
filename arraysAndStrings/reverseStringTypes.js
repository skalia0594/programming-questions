//in : "I am a good boy"

const input = "I am a good boy";
console.log('Input String:', input);

//1
const reverseString= str => {
    return str.split('').reverse().join('');
}
console.log('1. reverseString: '+reverseString(input)); // out : yob doog a ma I

//2
const reverseWords = str => {
    return str.split(' ').reverse().join(' ');
}
console.log('2. reverseWords: '+reverseWords(input));

//3
const reverseInPlace = str => {
    return reverseString(reverseWords(str));
}
console.log('3. reverseInPlace: ',reverseInPlace(input));