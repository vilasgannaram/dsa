/**
 * @param {string} s
 * @return {number}
 */

function firstUniqChar(s) {
	let hash = {};

	for (let i = 0; i < s.length; i++) {
		if (s[i] in hash) {
			hash[s[i]] = hash[s[i]] + 1;
		} else {
			hash[s[i]] = 1;
		}
	}

	for (let i in hash) {
		if (hash[i] == 1) return s.indexOf(i);
	}
	return -1;
}

console.log(firstUniqChar('loveleetcode'));
