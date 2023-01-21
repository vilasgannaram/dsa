// Optimized Merge Sort function
function mergeSort(arr) {
	// base case for recursion
	if (arr.length < 2) return arr;

	// calculate middle index
	const middle = Math.floor(arr.length / 2);

	// divide array into left and right sides
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	// recursively call mergeSort on left and right sides
	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);

	// merge and return the sorted left and right sides
	return merge(sortedLeft, sortedRight);
}

// helper function to merge two sorted arrays
function merge(left, right) {
	let leftIndex = 0;
	let rightIndex = 0;
	const result = [];

	// while both left and right sides have elements
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex++]);
		} else {
			result.push(right[rightIndex++]);
		}
	}

	// add remaining elements from left or right side
	return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([10, 24, 86, 62, 1]));
