var TreeNode = /** @class */ (function () {
    function TreeNode(v) {
        this.val = v;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var idx = 0;
function treeConstructor(arr) {
    if (arr[idx] == -1) {
        idx++;
        return null;
    }
    var nn = new TreeNode(arr[idx]);
    idx++;
    var leftChild = treeConstructor(arr);
    var rightChild = treeConstructor(arr);
    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
}
var tree = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1, -1];
var root = treeConstructor(tree);
var preOrder = [];
var inOrder = [];
var postOrder = [];
function dfs(node) {
    if (node == null)
        return;
    //before making any calls to left or right,
    //this area is pre Area
    preOrder.push(node.val);
    //i have to call left according to dfs
    dfs(node.left);
    //after calling left, this area is In Area
    inOrder.push(node.val);
    //i have to call right according to dfs
    dfs(node.right);
    //after calling both left right
    //this area is post area
    postOrder.push(node.val);
}
dfs(root);
console.log(preOrder);
console.log(inOrder);
console.log(postOrder);
