/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

function searchMatrix(matrix, target) {
	for (let i = 0; i < matrix.length; i++) {
		let left = matrix[i][0],
			right = matrix[i][matrix[i].length - 1];

		if (target >= left && target <= right) {
			const row = matrix[i];

			let l = 0,
				r = row.length - 1,
				m = Math.floor((l + r) / 2);

			while (row[m] !== target && l <= r) {
				if (target <= row[m]) r = m - 1;
				else l = m + 1;
				m = Math.floor((l + r) / 2);
			}
			return row[m] === target;
		}
	}
	return false;
}

console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
);
