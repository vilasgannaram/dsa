/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
	const ans = [];
	const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let startIndex, endIndex, column;

	for (let i = 0; i < alphabets.length; i++) {
		if (alphabets[i] === s[0]) {
			startIndex = i;
		}
		if (alphabets[i] === s[3]) {
			endIndex = i;
			break;
		}
	}

	for (let i = startIndex; i <= endIndex; i++) {
		column = '';
		for (let j = s[1]; j <= s[4]; j++) {
			ans.push(`${alphabets[i]}${j}`);
		}
	}

	return ans;
};

console.log(cellsInRange('K1:L2'));
console.log(cellsInRange('W5:W8'));
