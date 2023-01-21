function selectionSort(arr) {
	let minIndex;
	for (let i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
	return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
