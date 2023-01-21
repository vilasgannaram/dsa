/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum_1(nums, target) {
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
}

function twoSum_2(nums, target) {
	const hash = {};

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];

		if (diff in hash) return [hash[diff], i];
		else hash[nums[i]] = i;
	}
}

console.log(twoSum_2([2, 7, 11, 15], 9));
