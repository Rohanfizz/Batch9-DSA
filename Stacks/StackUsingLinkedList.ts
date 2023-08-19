class ListNode {
    val: any;
    next: ListNode | null;

    constructor(v: any) {
        this.val = v;
        this.next = null;   
    }
}

class LinkedList{
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor(){
        this.head  = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst = function(v:any){
        let nn = new  ListNode(v);
        if(this.size  == 0){
            this.head =  nn;
            this.tail = nn;
        }else{
            nn.next = this.head;
            this.head  = nn;
        }
        this.size++;
    }

    removeFirst = function() : any{
        if(this.size == 0){
            console.log("Stack underflow!");
            return null;
        }
        let ret = this.head.val;
        this.head  = this.head.next;
        this.size--;
        return ret;
    }

    getFirst = function() : any{
        if(this.head == null){
            console.log("Stack underflow!");
            return null;
        }
        return this.head.val;
    }

    getSize = function():number{
        return this.size;
    }
}

class Stack{
    ll : LinkedList;
    constructor(){
        console.log("Stack constructor was called!")
        this.ll = new  LinkedList();
    }

    push = (val : any) : void=>{
        this.ll.addFirst(val);
    }   
    pop = () : any =>{
        return this.ll.removeFirst();
    }
    top = () : any =>{
        return this.ll.getFirst();
    }
    size = () : number =>{
        return this.ll.getSize();
    }
}

let st = new Stack();

st.push(10);
st.push(20);
st.push(17);

console.log(st.top()); // 17
console.log(st.pop()); // 17
console.log(st.pop()); // 20
console.log(st.pop()); // 10
console.log(st.pop()); // STUF,null