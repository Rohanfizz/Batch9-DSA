let s = "abBcCeE";

function strDiff2Chars(s:string):string{
    let ans = "";
    for(let i = 0;i<s.length-1;i++){
        ans+=s[i];
        //we have to calculate the diff
        let asciiI  = s.charCodeAt(i);
        let asciiIp1 = s.charCodeAt(i+1);
        ans+=(asciiIp1 - asciiI);
    }
    ans+=s[s.length-1];//last character
    return ans;
}
console.log(strDiff2Chars(s));