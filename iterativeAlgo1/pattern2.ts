let n = 5;
let s: string="";

for(let line = 1;line<=n;line++){
    let stars = line;
    let spaces  = n-stars;

    for(let j = 1;j<=spaces;j++) s+= " ";

    for(let j = 1;j<=stars;j++) s+="*";

    s+="\n";
}

console.log(s);