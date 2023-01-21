/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome_1(str) {
	// removing all non-alphanumeric characters from a string and then, lowerCase it.
	str = str.replace(/[^0-9A-Z]+/gi, '').toLowerCase();

	let rStr = str.split('').reverse().join('');
	return str === rStr;
}

// Two Pointers:

function isPalindrome_2(s) {
	s = s.replace(/[^0-9A-Z]+/gi, '').toLowerCase();
	let left = 0,
		right = s.length - 1;

	while (left <= right) {
		if (s[left] !== s[right]) return false;
		else {
			left++;
			right--;
		}
	}
	return true;
}

console.log(isPalindrome_1('A man, a plan, a canal: Panama'));
