function substringPrinter(s) {
    for (var i = 0; i < s.length; i++) {
        for (var j = i; j < s.length; j++) {
            //we have to print the substring from i to j
            console.log(s.substring(i, j + 1));
        }
    }
}
var s = "abcd";
substringPrinter(s);
