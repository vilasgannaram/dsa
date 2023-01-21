// BINARY SEARCH:

// Only works on the sorted arrays

// If the array is empty, return -1.
// If the array has elements, find the middle element. If the target is equals to middle element return index.
// If target is less than middle element, binary search left half of the array
// If target is greater than middle element, binary search right half of the array

// Iterative
// Big-O: O(log n)

function binarySearch(array, target) {
	let left = 0;
	let right = array.length - 1;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);

		if (array[middle] === target) return middle;
		else if (target < array[middle]) right = middle - 1;
		else left = middle + 1;
	}

	return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));

// Recursive
// Big-O: O(log n)

function recursiveBinarySearch(arr, target) {
	return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
	if (left > right) return -1;

	let mid = Math.floor((left + right) / 2);

	if (arr[mid] === target) {
		return mid;
	} else if (arr[mid] < target) {
		return search(arr, target, mid + 1, right);
	} else {
		return search(arr, target, left, mid - 1);
	}
}

console.log(recursiveBinarySearch([-1, 0, 3, 5, 9, 12], 12));
