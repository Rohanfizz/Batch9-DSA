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

function lowestCommonAncestor(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	if(p.val < node.val && q.val < node.val){
        return lowestCommonAncestor(node.left,p,q);
    }else if(p.val > node.val && q.val > node.val){
        return lowestCommonAncestor(node.right,p,q);
    }
    return node;
};

