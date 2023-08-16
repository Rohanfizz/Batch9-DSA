var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.display = function () {
            var s = "";
            var temp = this.head;
            while (temp != null) {
                s += temp.val + " -> ";
                temp = temp.next;
            }
            console.log(s + "null");
        };
        this.addLast = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                this.tail.next = nn;
                this.tail = nn;
            }
            this.size++;
        };
        this.addFirst = function (val) {
            var nn = new ListNode(val);
            if (this.size == 0) {
                this.head = nn;
                this.tail = nn;
            }
            else {
                nn.next = this.head;
                this.head = nn;
            }
            this.size++;
        };
        this.removeFirst = function () {
            if (this.size == 0) {
                console.log("Linkedlist is already empty!");
                return -1; // we did not delete anything
            }
            else if (this.size == 1) {
                var ret = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else { // size > 1
                var ret = this.head.val;
                this.head = this.head.next;
                this.size--;
                return ret;
            }
        };
        this.removeLast = function () {
            if (this.size == 0) {
                console.log("Linkedlist is already empty!");
                return -1; // we did not delete anything
            }
            else if (this.size == 1) {
                var ret = this.head.val;
                this.head = null;
                this.tail = null;
                this.size--;
                return ret;
            }
            else { // size > 1
                var ret = this.tail.val; //this value is about to get deleted
                var temp = this.head;
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
        this.getAt = function (target) {
            if (target < 0 || target >= this.size) {
                return null;
            }
            var temp = this.head;
            var i = 0;
            while (i < target) {
                temp = temp.next;
                i++;
            }
            return temp;
        };
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
    return LinkedList;
}());
var ll = new LinkedList();
ll.addLast(10);
ll.addLast(200);
ll.addLast(30);
ll.addLast(40);
ll.addLast(50);
// console.log(ll.removeFirst()); // 20
// console.log(ll.removeLast()); // 10
console.log(ll.getAt(2).val);
ll.display(); //5->
