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
 * @return {TreeNode}
 */
function invertTree(root) {
	if (!root) return root;

	function traverse(node) {
		let temp = node.left;
		node.left = node.right;
		node.right = temp;

		if (node.left) traverse(node.left);
		if (node.right) traverse(node.right);
	}
	traverse(root);
	return root;
}

function invertTree_2(root) {
	if (!root) return root;

	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	if (root.left) invertTree_2(root.left);
	if (root.right) invertTree_2(root.right);

	return root;
}
