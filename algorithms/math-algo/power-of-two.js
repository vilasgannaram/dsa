// Power of Two

// An integer is a power of two if there exists an integer `X` such that `n` === 2^x

// isPowerOfTwo(1) => true (2^0)
// isPowerOfTwo(4) => true (2^1)
// isPowerOfTwo(5) => false

// Big-O = O(log n)

function isPowerOfTwo(n) {
	if (n < 1) return false;

	while (n > 1) {
		if (n % 2 !== 0) return false;
		else n /= 2; // ===> n = n / 2
	}
	return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(8));

// Optimized Soltuion using BitWise
// Big-O = O(1)
function isPowerOfTwoBitWise(n) {
	if (n < 1) return false;
	return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(8));
