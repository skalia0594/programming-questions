var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const S = {}, T= {};
    for(let i=0 ; i< s.length; i++) {
        if(!S[s[i]]) S[s[i]] = 1;
        else S[s[i]]++;
    }
    for(let i=0 ; i< t.length; i++) {
        if(!T[t[i]]) T[t[i]] = 1;
        else T[t[i]]++;
    }
    const arr = Object.keys(S);
    for(let i= 0 ; i< arr.length ; i++) {
        if(S[arr[i]] !== T[arr[i]]) return false;
    }
    return true;
    // const T = t.split('').sort().join('') ;
    // const S = s.split('').sort().join('');
    // if(T !== S) return false;
    // return true;
};

console.log(isAnagram('anagram', 'nagamar'));