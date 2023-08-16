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





string solve(){
	
	string a="AERB",b="ATRC",c="AGCB";
	int idx = a.length-1;
	for(;idx--;idx>=0){
		if(a.charAt(i)==c.charAt(i)||b.charAt(i)==c.charAt(i)){
			continue;
		}else{
			break;
		}
	}
	if(idx<0){
		return "-1";
	}
	
	String[] arr = new  String[a.length]
	for(int k=0;k<a.length;k++){
		String temp = "[";
		for(char ch='A';ch<='Z';ch++){
			if(k==idx && ch==c.charAt(i)) continue;
			temp+=ch;
		}
		temp+="]";
		arr[k]=temp;
	}
	
	String ans = "";
	for(String it:arr){
		ans+=it;
	}
	
	return ans;
	
}