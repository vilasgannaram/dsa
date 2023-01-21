/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  Brute Force Solution:--
function containsDuplicate_1(nums) {
	nums = nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) return true;
	}
	return false;
}

//  Hash Map:--
function containsDuplicate_2(nums) {
	let hash = {};

	for (let i = 0; i < nums.length; i++) {
		if (!hash[nums[i]]) hash[nums[i]] = true;
		else return true;
	}
	return false;
}

// Set:--
function containsDuplicate_3(nums) {
	return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate_3([1, 5, 14, 7, 21, 2, 5]));
