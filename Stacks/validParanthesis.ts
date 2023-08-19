function isValid(s: string): boolean {

    let st = [];
    
    for(let i = 0;i<s.length;i++){
        let c = s[i];


        if(c == '(' || c == '[' || c=='{'){
            st.push(c);
        }else{
            if(st.length == 0) return false;
            
            let top = st[st.length-1];

            if(top == '(' && c == ')') st.pop();
            else if(top == '[' && c == ']') st.pop();
            else if(top == '{' && c == '}') st.pop();
            else return false;
        }
    }
    if(st.length > 0) return false;
    return true;

};