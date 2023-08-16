class ListNode {
    val: number;
    next: ListNode | null;
    constructor(v: number) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList{
    size: number;
    head: ListNode | null;
    tail: ListNode | null;

    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    display = function():void{// TC: O(N), SC: O(1)
        let s = "";
        let temp = this.head;

        while(temp!= null){
            s += temp.val+" -> ";
            temp = temp.next;
        }
        console.log(s+"null");
    }

    addLast = function(val : number) : void{ // TC: O(1), SC:O(1)
        let nn = new ListNode(val);
        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    }

    addFirst = function(val:number):void{//Tc: O(1), Sc: O(1)
        let nn = new ListNode(val);

        if(this.size == 0){
            this.head = nn;
            this.tail = nn;
        }else{
            nn.next = this.head;
            this.head = nn;
        }
        
        this.size++;
    }

    removeFirst = function() : number{//Tc: O(1), Sc:O(1)
        if(this.size == 0){
            console.log("Linkedlist is already empty!");
            return -1; // we did not delete anything
        }else if(this.size == 1){
            let ret = this.head.val;

            this.head = null;
            this.tail = null;
            this.size--;

            return ret;
        }else{ // size > 1
            let ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        }
    }

    removeLast = function() : number { // Tc : O(N) , Sc: O(1)
        if(this.size == 0){
            console.log("Linkedlist is already empty!");
            return -1; // we did not delete anything
        }else if(this.size == 1){
            let ret = this.head.val;

            this.head = null;
            this.tail = null;
            this.size--;

            return ret;
        }else{ // size > 1
            let ret = this.tail.val;//this value is about to get deleted

            let temp = this.head;

            while(temp.next != this.tail){
                temp = temp.next;
            }
            //Now temp is standing on secondlast node
            temp.next = null;
            this.tail = temp;
            this.size--;

            return ret;
        }
    }

    getAt = function (target:number) : ListNode | null{
        if(target<0 || target >= this.size){
            return null;
        }
    
        let temp :ListNode | null= this.head;
        let i = 0;

        while(i<target){
            temp = temp.next;
            i++;
        }

        return temp;
    }
}


let ll = new LinkedList();
ll.addLast(10);
ll.addLast(200);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);

// console.log(ll.removeFirst()); // 20
// console.log(ll.removeLast()); // 10
console.log(ll.getAt(2).val);

ll.display();//5->