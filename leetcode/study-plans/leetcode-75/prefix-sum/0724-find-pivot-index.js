/**
 * @param {number[]} nums
 * @return {number}
 */

function pivotIndex(nums) {
	const total = nums.reduce((acc, cur) => (acc += cur));

	let leftSum = 0;
	for (let i = 0; i < nums.length; i++) {
		rightSum = total - nums[i] - leftSum;
		if (leftSum == rightSum) return i;
		leftSum += nums[i];
	}
	return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
