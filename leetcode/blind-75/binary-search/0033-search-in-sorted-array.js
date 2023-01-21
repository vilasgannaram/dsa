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
	let left = 0,
		right = nums.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (nums[middle] === target) return middle;

		// Left sorted portion
		if (nums[left] <= nums[middle]) {
			if (target > nums[middle] || target < nums[left]) {
				left = middle + 1;
			} else right = middle - 1;
			// right sorted portion
		} else {
			if (target < nums[middle] || target > nums[right]) {
				right = middle - 1;
			} else left = middle + 1;
		}
	}
	return -1;
}

//

function search_3(nums, target) {
	let [left, right] = [0, nums.length - 1];

	while (left <= right) {
		const mid = (left + right) >> 1;
		const guess = nums[mid];
		const [leftNum, rightNum] = [nums[left], nums[right]];

		const isTarget = guess === target;
		if (isTarget) return mid;

		const isAscending = leftNum <= guess;
		if (isAscending) {
			const isInRange = leftNum <= target;
			const isLess = target < guess;

			const isTargetGreater = !(isInRange && isLess);
			if (isTargetGreater) left = mid + 1;

			const isTargetLess = isInRange && isLess;
			if (isTargetLess) right = mid - 1;
		}

		const isDescending = guess < leftNum;
		if (isDescending) {
			const isGreater = guess < target;
			const isInRange = target <= rightNum;

			const isTargetGreater = isGreater && isInRange;
			if (isTargetGreater) left = mid + 1;

			const isTargetLess = !(isGreater && isInRange);
			if (isTargetLess) right = mid - 1;
		}
	}

	return -1;
}

console.log(search_3([4, 5, 6, 7, 0, 1, 2], 0));
