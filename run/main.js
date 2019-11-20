/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function run(preL,preR,inL,inR) {
        if (preL>preR || preL<0 || preR>preorder.length ) return null
        if (inL>inR || inL<0 || inR>inorder.length ) return null
     
        const curNode = new TreeNode(preorder[preL])
        const inorderIndex = inorder.indexOf(preorder[preL])
        if (preL===preR) return curNode
        curNode.left = run(preL+1,preL+inorderIndex-inL,inL,inorderIndex-1)
        curNode.right = run(preL+inorderIndex-inL+1,preR,inorderIndex+1,inR)
        return curNode
    }
    if (!preorder) return null
    return run(0,preorder.length-1,0,preorder.length-1)
};