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
 * @param {number} k
 * @return {boolean}
 */

function findTarget_1(root, k) {
	let arr = [];
	function dfs(node) {
		arr.push(node.val);
		if (node.left) dfs(node.left);
		if (node.right) dfs(node.right);
	}
	dfs(root);
	console.log(arr);
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			console.log(arr[i], arr[j], arr[i] + arr[j]);
			if (arr[i] + arr[j] === k) return true;
		}
	}
	return false;
}
