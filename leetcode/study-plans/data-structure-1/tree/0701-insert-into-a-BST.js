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

function insertIntoBST(root, val) {
	const newNode = new TreeNode(val);

	if (!root) {
		root = newNode;
		return root;
	} else {
		let current = root;
		while (true) {
			if (current.val === val) return root;
			if (val > current.val) {
				if (!current.right) {
					current.right = newNode;
					return root;
				}
				current = current.right;
			} else if (val < current.val) {
				if (!current.left) {
					current.left = newNode;
					return root;
				}
				current = current.left;
			}
		}
	}
}
