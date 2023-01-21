/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram_1(s, t) {
	if (s.length !== t.length) return false;

	s = s.split('').sort().join('');
	t = t.split('').sort().join('');

	return s === t;
}

//  Hash:-

function isAnagram_2(s, t) {
	if (s.length !== t.length) return false;

	let countS = {},
		countT = {};

	for (let i = 0; i < s.length; i++) {
		s[i] in countS ? (countS[s[i]] = countS[s[i]] + 1) : (countS[s[i]] = 0);

		t[i] in countT ? (countT[t[i]] = countT[t[i]] + 1) : (countT[t[i]] = 0);
	}

	for (let i in countS) {
		if (countS[i] !== countT[i]) return false;
	}

	return true;
}

console.log(isAnagram_1('car', 'rac'));
