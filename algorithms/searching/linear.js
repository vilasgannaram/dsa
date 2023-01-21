// LINEAR SEARCH:

// start at the first element of the array and move towards the last.
// At each element through, check if the element is equals to the target element.
// If found return index.
// Else return -1

// Big-O: O(n)

function linearSearch(array, target) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === target) return i;
	}
	return -1;
}

console.log(linearSearch([12, 43, 54, 39, 87, 32], 87));
