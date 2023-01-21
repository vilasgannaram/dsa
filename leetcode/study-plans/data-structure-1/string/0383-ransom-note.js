/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

function canConstruct(ransomNote, magazine) {
	const hash = {};

	// adding elements into hashmap
	for (let i = 0; i < magazine.length; i++) {
		if (!hash[magazine[i]]) hash[magazine[i]] = 1;
		else hash[magazine[i]] = hash[magazine[i]] + 1;
	}

	// deleting elements from hashmap
	for (let i = 0; i < ransomNote.length; i++) {
		if (!hash[ransomNote[i]]) return false;
		else hash[ransomNote[i]] = hash[ransomNote[i]] - 1;
	}
	return true;
}

console.log(canConstruct('ab', 'aab'));
