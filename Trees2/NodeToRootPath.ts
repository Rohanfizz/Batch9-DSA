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

let tree = [6, 16, 26, -1, -1, -1, 36, 99, -1, -1, 56, -1,-1];
let root = treeConstructor(tree);


function NodeToRootPath(node : TreeNode | null , target : number): number[] {
    if(node == null) return [];
    if(node.val == target) return [node.val];

    let leftPath = NodeToRootPath(node.left,target);

    if(leftPath.length != 0){
        leftPath.push(node.val);
        return leftPath;
    }

    let rightPath = NodeToRootPath(node.right,target);

    if(rightPath.length != 0){
        rightPath.push(node.val);
        return rightPath;
    }
    return [];
}