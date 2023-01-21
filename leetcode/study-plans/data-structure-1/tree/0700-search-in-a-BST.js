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
 * @param {number} val
 * @return {TreeNode}
 */

function searchBST_1(root, val) {
	if (!root) return null;
	let current = root;

	while (current) {
		if (current.val == val) return current;
		if (val < current.val) {
			current = current.left;
		} else if (val > current.val) {
			current = current.right;
		}
	}
	return null;
}

function searchBST_2(root, val) {
	if (!root) return null;
	if (root.val === val) return root;

	if (val < root.val) {
		return searchBST_2(root.left, val);
	} else {
		return searchBST_2(root.right, val);
	}
}
