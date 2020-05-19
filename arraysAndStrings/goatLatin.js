//If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word
//If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma"
//Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1

//Input: "I speak Goat Latin"
//Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
const vowels = ['a','e','i','o','u','A','E','I','O','U'];
const goatLatin = str => {
    let result = '';
    const arr = (str.trim()).split(' ');
    for(let i = 0; i< arr.length; i++) {
        const firstLetter = arr[i][0];
        const numberOfA = i+1;
        let appendA = '';
        for(let j = 0; j< numberOfA ; j++) {
            appendA = appendA.concat('a');
        }
        if(vowels.includes(firstLetter)) {
            result = result.concat(arr[i],'ma',appendA, ' ');
        }else{
            const subWord = arr[i].substring(1,arr[i].length);
            result = result.concat(subWord,firstLetter,'ma',appendA, ' ');
        }
    }
    return result.substring(0,result.length-1);
}

console.log(goatLatin('I speak Goat Latin'));