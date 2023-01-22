/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
	let swapped;
	let sArr = s.split('');

	do {
		swapped = false;
		for (let i = 0; i < indices.length - 1; i++) {
			if (indices[i] > indices[i + 1]) {
				[indices[i], indices[i + 1]] = [indices[i + 1], indices[i]];
				[sArr[i], sArr[i + 1]] = [sArr[i + 1], sArr[i]];
				swapped = true;
			}
		}
	} while (swapped);

	return sArr.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));

// var restoreString = function (s, indices) {
//   let ans = '';
//   const hashmap = {};

//   for (let i = 0; i < s.length; i++) {
//       hashmap[indices[i]] = s[i];
//   }

//   for (let i = 0; i < s.length; i++) {
//       ans += hashmap[i];
//   }

//   return ans;
// };
