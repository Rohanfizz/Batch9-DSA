var n = 17;
function diamondPrinter(n) {
    var stars = 1;
    var spaces = Math.floor(n / 2);
    var s = "";
    for (var i = 1; i <= n; i++) {
        //this loop will run n times, for n rows
        //first spaces need to be added
        for (var j = 1; j <= spaces; j++) {
            s += " ";
        }
        //add stars number of stars
        for (var j = 1; j <= stars; j++) {
            s += "*";
        }
        s += "\n";
        //decide the future
        if (i <= Math.floor(n / 2)) {
            //plan a
            stars += 2;
            spaces -= 1;
        }
        else {
            stars -= 2;
            spaces += 1;
        }
    }
    console.log(s);
}
console.log('\\');
diamondPrinter(n);
