/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
	//  Initilizing left and right pointers
	let l = 0,
		r = nums.length - 1;
	while (l < r) {
		if (nums[l] + nums[r] > target) r--;
		else if (nums[l] + nums[r] < target) l++;
		//  Adding one to left and right pointers, because nums array is one-indexed based.
		else return [l + 1, r + 1];
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
