let n = 17;

function diamondPrinter(n: number) {
    let stars = 1;
    let spaces = Math.floor(n / 2);
    let s: string = "";

    for (let i = 1; i <= n; i++) {
        //this loop will run n times, for n rows

        //first spaces need to be added
        for (let j = 1; j <= spaces; j++) {
            s += " ";
        }

        //add stars number of stars
        for (let j = 1; j <= stars; j++) {
            s += "*";
        }

        s += "\n";

        //decide the future
        if (i <= Math.floor(n / 2)) {
            //plan a
            stars += 2;
            spaces -= 1;
        } else {
            stars -= 2;
            spaces += 1;
        }
    }
    console.log(s);
}
diamondPrinter(n);
