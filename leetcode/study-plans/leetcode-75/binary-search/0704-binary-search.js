/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
	let [l, r] = [0, nums.length - 1],
		mid = Math.floor((l + r) / 2);

	while (nums[mid] !== target && l <= r) {
		if (target <= nums[mid]) r = mid - 1;
		else l = mid + 1;
		mid = Math.floor((l + r) / 2);
	}
	return nums[mid] === target ? mid : -1;
}
