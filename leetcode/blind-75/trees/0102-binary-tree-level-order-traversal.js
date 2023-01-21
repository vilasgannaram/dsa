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
 * @return {number[][]}
 */

function levelOrder(root) {
	if (!root) return [];
	let result = [],
		queue = [],
		current,
		node,
		len;

	queue.push(root);
	while (queue.length) {
		current = [];
		len = queue.length;
		for (let i = 0; i < len; i++) {
			node = queue.shift();
			current.push(node.val);

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		result.push(current);
	}
	return result;
}
