/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

function intersect(nums1, nums2) {
	let hash = {},
		result = [];

	for (let i = 0; i < nums1.length; i++) {
		if (hash[nums1[i]]) {
			hash[nums1[i]]++;
		} else hash[nums1[i]] = 1;
	}

	for (let i = 0; i < nums2.length; i++) {
		if (hash[nums2[i]]) {
			result.push(nums2[i]);
			hash[nums2[i]]--;
		}
	}
	return result;
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
