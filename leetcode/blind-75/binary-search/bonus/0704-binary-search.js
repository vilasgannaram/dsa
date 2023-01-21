/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search_1(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i;
	}
	return -1;
}

//

function search_2(nums, target) {
	let [left, right] = [0, nums.length - 1],
		middle = Math.floor((left + right) / 2);

	while (nums[middle] !== target && left <= right) {
		if (target <= nums[middle]) {
			right = middle - 1;
			middle = Math.floor((left + right) / 2);
		} else {
			left = middle + 1;
			middle = Math.floor((left + right) / 2);
		}
	}

	if (nums[middle] === target) return middle;
	else return -1;
}

console.log(search_1([-1, 0, 3, 5, 9, 12], 9));
