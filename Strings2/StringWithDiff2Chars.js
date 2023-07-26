var s = "abBcCeE";
function strDiff2Chars(s) {
    var ans = "";
    for (var i = 0; i < s.length - 1; i++) {
        ans += s[i];
        //we have to calculate the diff
        var asciiI = s.charCodeAt(i);
        var asciiIp1 = s.charCodeAt(i + 1);
        ans += (asciiIp1 - asciiI);
    }
    ans += s[s.length - 1]; //last character
    return ans;
}
console.log(strDiff2Chars(s));
