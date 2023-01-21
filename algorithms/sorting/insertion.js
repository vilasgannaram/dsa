// INSERTION SORT:

// Virtually split the array into a sorted and an unsorted part.
// Assume that the first element is already sorted and remaining elements are unsorted.
// Select an unsorted element and compare with all elements in the sorted part.
// If the elememts in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
// Insert the selected element at the right index.
// Repeat till all the unsorted elements are placed in the right order.

// Big-: O(n^2)

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;

		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([5, 4, 3, 2, 1, 0]));
