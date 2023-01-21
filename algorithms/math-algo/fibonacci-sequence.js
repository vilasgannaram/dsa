// Fibonacci Sequence

// In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.

// fibonacci(1) = [0,1]
// fibonacci(2) = [0,1,1]
// fibonacci(3) = [0,1,1,2]
// fibonacci(4) = [0,1,1,2,3]
// fibonacci(5) = [0,1,1,2,3,5]
// fibonacci(6) = [0,1,1,2,3,5,8]

// Big-O = O(n) linear

function fibonacci(n) {
	if (n === 0) return [n];

	const fib = [0, 1];

	for (let i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}

	return fib;
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(9));
