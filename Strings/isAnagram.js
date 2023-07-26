function isAnagram(s, t) {
    let fs = new Array(26).fill(0);
    let fs = new Array(123).fill(0);
    let ft = new Array(26).fill(0);
    //filling the freq of s
    for (let i = 0; i < s.length; i++) {
        let ascii = s.charCodeAt(i);
        let index = ascii - 97;
        fs[index]++;
    }
    //filling the freq of t
    for (let i = 0; i < t.length; i++) {
        let ascii = t.charCodeAt(i);
        let index = ascii - 97;
        ft[index]++;
    }
    //compare both frequency arrays
    for (let i = 0; i < 26; i++) {
        if (fs[i] != ft[i])
            return false;
    }
    return true;
}
;
console.log(isAnagram("abcc", "bca"));
