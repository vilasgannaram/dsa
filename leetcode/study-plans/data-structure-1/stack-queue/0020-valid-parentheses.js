/**
 * @param {string} s
 * @return {boolean}
 */

function isValid(s) {
	const hash = {
		')': '(',
		']': '[',
		'}': '{',
	};

	const stack = [];

	for (let i = 0; i < s.length; i++) {
		let cur = s[i];

		if (hash[cur]) {
			const topElement = stack.length === 0 ? '#' : stack.pop();
			if (topElement !== hash[cur]) return false;
		} else stack.push(cur);
	}

	return stack.length === 0;
}

console.log(isValid('()'));
