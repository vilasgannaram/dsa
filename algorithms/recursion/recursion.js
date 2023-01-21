//  Recursion:

// Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem.

// Every recursive solution needs to have a base case ===> a condition to terminate the recursion.
// Recursion might simplify solving a problem, but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution.

// FIBONACCI SEQUENCE:	Big-O: O(2^n)

function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(6));

// FACTORIAL:

function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
