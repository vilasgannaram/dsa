// BUBBLE SORT:

// Compare adjacent elements in the array and swap the positions, if they are not in the intended order.
// Repeat the instruction as you step through each element in the array.
// Once you step through the whole array with no swaps, the array is sorted.

// Big-O: O(n^2)

function bubbleSort(arr) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

console.log(bubbleSort([0, -4, 1, 4, 3]));
