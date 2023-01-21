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
 * @return {number[]}
 */

function postorderTraversal(root) {
	if (!root) return [];
	let visited = [];

	function traverse(node) {
		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);

		visited.push(node.val);
	}
	traverse(root);
	return visited;
}
