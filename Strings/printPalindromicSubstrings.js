function isPalindrome(s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] != s[r]) {
            return false;
        }
        l++;
        r--;
    }
    return true;
}
function palindromicSubstringPrinter(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            //we have to print the substring from i to j
            var substr = s.substring(i, j + 1);
            if (isPalindrome(substr) == true) {
                console.log(substr);
            }
        }
    }
}
var s = "abcd";
palindromicSubstringPrinter(s);
console.log(isPalindrome(s));
