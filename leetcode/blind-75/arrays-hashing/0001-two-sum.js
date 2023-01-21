/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  Brute Force:-

function twoSum_1(arr, target) {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) return [i, j];
		}
	}
}

//  Hashmap:-

function twoSum_2(arr, target) {
	const hash = {};

	for (let i = 0; i < arr.length; i++) {
		let diff = target - arr[i];

		if (diff in hash) return [hash[diff], i];
		else hash[arr[i]] = i;
	}
}

console.log(twoSum_1([2, 7, 11, 15], 9));
