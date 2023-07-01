var n = 5;
var s = "";
for (var line = 1; line <= n; line++) {
    var stars = line;
    var spaces = n - stars;
    for (var j = 1; j <= spaces; j++)
        s += " ";
    for (var j = 1; j <= stars; j++)
        s += "*";
    s += "\n";
}
console.log(s);
