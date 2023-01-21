/**
 * @param {number[]} prices
 * @return {number}
 */

function maxProfit(prices) {
	// left = buy,  right = sell
	let [left, right, profit] = [0, 1, 0];

	while (right < prices.length) {
		const canSlide = prices[right] <= prices[left];

		if (canSlide) left = right;

		const window = prices[right] - prices[left];
		profit = Math.max(profit, window);
		right++;
	}
	return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
