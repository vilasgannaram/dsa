/**
 * @param {number[]} nums
 * @return {number[]}
 */

function runningSum_1(nums) {
	let sum = 0,
		arr = [];

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		arr.push(sum);
	}
	return arr;
}

function runningSum_2(nums) {
	let arr = [];

	nums.reduce((acc, cur) => {
		acc += cur;
		arr.push(acc);
		return acc;
	}, 0);

	return arr;
}

function runningSum_3(nums) {
	let accumulator = 0;
	return nums.map((element) => (accumulator += element));
}

console.log(runningSum_2([3, 1, 2, 10, 1]));
