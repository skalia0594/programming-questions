// given: "abccba" is this a palindrome string
//out: Yes

const palindromes = str => {
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length-1-i]) {
            return "NO";
        }
    }
    return "YES";
}

console.log(palindromes("abcdba"));
