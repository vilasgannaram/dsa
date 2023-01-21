/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

function matrixReshape(mat, r, c) {
	let m = mat.length,
		n = mat[0].length,
		res = [];

	if (m * n != r * c) return mat;

	for (let i = 0; i < r; i++) {
		res[i] = new Array(c).fill(0);
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			let pos = i * n + j,
				row = Math.floor(pos / c),
				col = pos % c;

			res[row][col] = mat[i][j];
		}
	}
	return res;
}

console.log(
	matrixReshape(
		[
			[1, 2],
			[3, 4],
		],
		1,
		4
	)
);
