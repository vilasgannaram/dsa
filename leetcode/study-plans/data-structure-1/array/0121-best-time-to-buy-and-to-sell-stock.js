/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
	let max = 0,
		left = 0,
		right = 1;

	while (right < prices.length) {
		if (prices[right] <= prices[left]) left = right;
		max = Math.max(max, prices[right] - prices[left]);
		right++;
	}
	return max;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
