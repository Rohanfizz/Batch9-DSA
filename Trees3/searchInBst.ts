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

function searchBST(root: TreeNode | null, target: number): TreeNode | null {

    if(root == null) return null;
    if(root.val == target) return root;

    if(target < root.val){
        //left
        return searchBST(root.left,target);
    }else{
        //right
        return searchBST(root.right,target);
    }

};





