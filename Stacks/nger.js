//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
    
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++){
            arr[i] = BigInt(input_line[i]);
        }
        let obj = new Solution();
        let ans = obj.nextLargerElement(arr, n);
        let s="";
        for(let i=0;i<ans.length;i++)
        {
            if(ans[i]==BigInt(-0))
                ans[i]=BigInt(0);
            s+=ans[i];
            s+=" ";
        }
        console.log(s);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {BigInt[]} arr
 * @param {number} n
 * @returns {BigInt[]}
*/
class Solution
{
    //Function to find the next greater element for each element of the array.
    nextLargerElement(arr, n){
        // code here
        let st = [];
        let ans= new  Array(n);
        for(let i = n-1;i>=0;i--){ // if reversed, you will get ngel
            let num = arr[i];
            
            while(st.length > 0 && st[st.length-1] <= num){ //if >= you will get nser
                st.pop();
            }
            
            if(st.length == 0){
                ans[i] = -1;
            }else ans[i] = st[st.length-1];
            
            st.push(num);
        }
        return ans;
    }
}









