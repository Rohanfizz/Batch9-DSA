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
var tree = [6, 16, 26, -1, -1, -1, 36, 99, -1, -1, 56, -1, -1];
var root = treeConstructor(tree);
function getSize(node) {
    if (node == null)
        return 0;
    var leftSize = getSize(node.left);
    var rightSize = getSize(node.right);
    return leftSize + rightSize + 1;
}
function getMax(node) {
    if (node == null) {
        return -Infinity;
    }
    var leftMax = getMax(node.left);
    var rightMax = getMax(node.right);
    return Math.max(node.val, Math.max(leftMax, rightMax));
}
// console.log(getSize(root)); 
console.log(getMax(root));
console.log(0 | 12 | 10);
