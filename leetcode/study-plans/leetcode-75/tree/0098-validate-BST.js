/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function isValidBST(root) {
	function traverse(node) {
		if (node.left) {
			if (node.left.val >= node.val) return false;
			traverse(node.left);
		}
		if (node.right) {
			if (node.right.val <= node.val) return false;
			traverse(node.right);
		}
	}
	traverse(root);
	return true;
}
