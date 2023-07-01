var n = 15;
var s = "";
for (var line = 1; line <= n; line++) {
    for (var j = 1; j <= line; j++) {
        s += "*";
    }
    s += "\n";
}
console.log(s);
