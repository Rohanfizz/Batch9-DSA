var s = "abcd";

// s[2] =  "f";//this  is  not  possible because strings immutable
s = s.split('');//convert string to array of string
s[2] = 'f'; // make changes
s=s.join(''); //convert array string back to string

console.log(s);
