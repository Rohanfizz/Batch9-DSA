var n = 5;
var s = "";
for (var line = n; line >= 1; line--) {
    var spaces = n - line;
    var stars = line;
    for (var j = 1; j <= n; j++) {
        if (j <= spaces)
            s += " ";
        else
            s += "*";
    }
    // for(let j  = 1;j<=spaces;j++){
    //     s+=" ";
    // }
    // for(let j = 1;j<=stars;j++){
    //     s+="*";
    // }
    s += '\n';
}
console.log(s);
