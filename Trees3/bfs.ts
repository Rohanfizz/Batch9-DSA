/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(root == null) return [];
    let q: TreeNode[] = [];

    let ans = [];
    q.push(root);

    while(q.length > 0){
        let sz =q.length;
        let currLevel : number[] = [];

        while(sz > 0){
            //remove
            let cnode = q.shift();
            //work
            currLevel.push(cnode.val);
            //left child
            if(cnode.left != null) q.push(cnode.left);
            //right child
            if(cnode.right != null) q.push(cnode.right);

            sz--;
        }

        ans.push(currLevel);
    }
    return ans;
};



