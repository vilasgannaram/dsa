/**
 * @param {string} s
 * @return {number}
 */

function longestPalindrome(s) {
	let map = {},
		res = 0;

	for (let char of s) {
		map[char] = map[char] + 1 || 1;
		if (map[char] % 2 === 0) res += 2;
	}
	return s.length > res ? res + 1 : res;
}

console.log(longestPalindrome('abccccdd'));
