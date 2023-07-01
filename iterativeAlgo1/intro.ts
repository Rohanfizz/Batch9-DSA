let n  =15;
let s: string = "";

for(let line = 1;line<=n;line++){
    for(let j = 1;j<=line;j++){
        s+="*";
    }
    s += "\n";
}

console.log(s);