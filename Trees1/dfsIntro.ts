class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null; 

    constructor(v:number){
        this.val = v;
        this.left = null;
        this.right = null;
    }
}

let idx = 0;
function treeConstructor(arr:number[]) : TreeNode | null{
    if(arr[idx] == -1){
        idx++;
        return null;
    }
    
    let nn = new TreeNode(arr[idx]);
    idx++;

    let leftChild = treeConstructor(arr);
    let rightChild = treeConstructor(arr);

    nn.left = leftChild;
    nn.right = rightChild;
    return nn;
}

let tree = [6, 16, 26, -1, -1, -1, 36, 44, -1, -1, 56, -1,-1];
let root = treeConstructor(tree);

let preOrder :number[]=[];
let inOrder :number[]= [];
let  postOrder :number[]= [];

function dfs(node:TreeNode | null) : void{
    if(node == null) return;
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

console.log(preOrder)
console.log(inOrder)
console.log(postOrder)