/**
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate_1(nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] === nums[j]) return true;
		}
	}
	return false;
}

function containsDuplicate_2(nums) {
	nums = nums.sort((a, b) => a - b);
	for (var i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) return true;
	}
	return false;
}

function containsDuplicate_3(nums) {
	return new Set(nums).size !== nums.length;
}

function containsDuplicate_4(nums) {
	let hash = {};
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] in hash) return true;
		hash[nums[i]] = true;
	}
	return false;
}

console.log(containsDuplicate_1([1, 2, 3, 1]));
