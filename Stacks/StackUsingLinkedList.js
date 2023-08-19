var ListNode = /** @class */ (function () {
    function ListNode(v) {
        this.val = v;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.addFirst = function (v) {
            var nn = new ListNode(v);
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
                console.log("Stack underflow!");
                return null;
            }
            var ret = this.head.val;
            this.head = this.head.next;
            this.size--;
            return ret;
        };
        this.getFirst = function () {
            if (this.head == null) {
                console.log("Stack underflow!");
                return null;
            }
            return this.head.val;
        };
        this.getSize = function () {
            return this.size;
        };
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    return LinkedList;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        var _this = this;
        this.push = function (val) {
            _this.ll.addFirst(val);
        };
        this.pop = function () {
            return _this.ll.removeFirst();
        };
        this.top = function () {
            return _this.ll.getFirst();
        };
        this.size = function () {
            return _this.ll.getSize();
        };
        console.log("Stack constructor was called!");
        this.ll = new LinkedList();
    }
    return Stack;
}());
var st = new Stack();
st.push(10);
st.push(20);
st.push(17);
console.log(st.top()); // 17
console.log(st.pop()); // 17
console.log(st.pop()); // 20
console.log(st.pop()); // 10
console.log(st.pop()); // STUF,null
