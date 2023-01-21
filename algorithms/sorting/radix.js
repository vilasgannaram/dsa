function radixSort(arr) {
	// Find the maximum number to know the number of digits
	let max = Math.max(...arr);
	let digitPlace = 1;

	// Loop through each digit
	while (max > 0) {
		// Create a bucket for each digit (0-9)
		let buckets = Array.from({ length: 10 }, () => []);

		// Sort the array into the appropriate bucket based on the current digit
		for (let i = 0; i < arr.length; i++) {
			let digit = Math.floor((arr[i] / digitPlace) % 10);
			buckets[digit].push(arr[i]);
		}

		// Flatten the buckets back into the original array
		arr = [].concat(...buckets);

		// Move to the next digit place
		digitPlace *= 10;
		max = Math.floor(max / 10);
	}

	return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
