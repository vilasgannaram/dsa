// Prime Number

// A prime number is a natural number greater than 1, that is not a product of two smaller numbers.

// isPrime(5) => true (1*5 or 5*1)
// isPrime(4) => false (1*5 or 2*2 or 5*1)

// Big-O = O(n)

function isPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}

	return true;
}

console.log(isPrime(1));
console.log(isPrime(4));
console.log(isPrime(5));

// Optimized Primality Test

// Integers larger than the square root do not need to be checked beacuse, whenever `n=a*b`, one of the two factors `a` and `b` is less than or equal to the square root of `n`

// n=24, a=4, and b=6
// the square root of 24 is 4.89, which is than a

// n=35, a=5, and b=7
// the square root of 35 is 5.91, which is than a

// Big-O = O(sqrt(n))

function OptimizedIsPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
}

console.log(OptimizedIsPrime(1));
console.log(OptimizedIsPrime(4));
console.log(OptimizedIsPrime(5));
