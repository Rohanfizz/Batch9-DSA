class ListNode {
    val: number;
    next: ListNode | null;
    constructor(v: number) {
        this.val = v;
        this.next = null;
    }
}

class LinkedList {
    size: number;
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    getSize = function():number{
        return this.size;
    }
    display = function (): void {
        // TC: O(N), SC: O(1)
        let s = "";
        let temp = this.head;

        while (temp != null) {
            s += temp.val + " -> ";
            temp = temp.next;
        }
        console.log(s + "null");
    };

    addLast = function (val: number): void {
        // TC: O(1), SC:O(1)
        let nn = new ListNode(val);
        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            this.tail.next = nn;
            this.tail = nn;
        }
        this.size++;
    };

    addFirst = function (val: number): void {
        //Tc: O(1), Sc: O(1)
        let nn = new ListNode(val);

        if (this.size == 0) {
            this.head = nn;
            this.tail = nn;
        } else {
            nn.next = this.head;
            this.head = nn;
        }

        this.size++;
    };

    removeFirst = function (): number {
        //Tc: O(1), Sc:O(1)
        if (this.size == 0) {
            console.log("Linkedlist is already empty!");
            return -1; // we did not delete anything
        } else if (this.size == 1) {
            let ret = this.head.val;

            this.head = null;
            this.tail = null;
            this.size--;

            return ret;
        } else {
            // size > 1
            let ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        }
    };

    removeLast = function (): number {
        // Tc : O(N) , Sc: O(1)
        if (this.size == 0) {
            console.log("Linkedlist is already empty!");
            return -1; // we did not delete anything
        } else if (this.size == 1) {
            let ret = this.head.val;

            this.head = null;
            this.tail = null;
            this.size--;

            return ret;
        } else {
            // size > 1
            let ret = this.tail.val; //this value is about to get deleted

            let temp = this.head;

            while (temp.next != this.tail) {
                temp = temp.next;
            }
            //Now temp is standing on secondlast node
            temp.next = null;
            this.tail = temp;
            this.size--;

            return ret;
        }
    };

    getAt = function (target: number): ListNode | null {
        if (target < 0 || target >= this.size) {
            return null;
        }

        let temp: ListNode | null = this.head;
        let i = 0;

        while (i < target) {
            temp = temp.next;
            i++;
        }

        return temp;
    };

    addAt = function (val: number, idx: number) {
        if (idx == 0) {
            this.addFirst(val);
            return;
        } else if (idx == this.size) {
            this.addLast(val);
            return;
        } else if (idx < 0 || idx > this.size) {
            console.log("Invalid Index!");
            return;
        }

        let prev = this.getAt(idx - 1);
        let curr = this.getAt(idx);

        let nn = new ListNode(val);
        prev.next = nn;
        nn.next = curr;

        this.size++;
    };

    removeAt = function (idx: number): number {
        if(idx == 0){
            return this.removeFirst();
        }else if(idx == this.size-1){
            return this.removeLast();
        }else if(idx < 0 || idx >= this.size){
            console.log("Invalid Index!");
            return -1;
        }
        let prev = this.getAt(idx-1);
        let curr = prev.next;
        let ret = curr.val;

        prev.next = curr.next;
        this.size--;
        return ret;
    };

}

let ll = new LinkedList();

ll.addLast(1);
ll.addLast(6);
ll.addLast(3);
ll.addLast(4);
ll.addLast(7);

ll.addAt(40, 3);
ll.removeAt(4);
ll.display(); //5->
