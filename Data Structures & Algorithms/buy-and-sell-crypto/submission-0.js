class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length == 0) return 0;
        let maxProfit = 0;
        let currentBuy = prices[0];
        for (let day = 0; day < prices.length - 1; day++) {
            let nextBuy = prices[day + 1];
            if (nextBuy < currentBuy) {
                currentBuy = nextBuy;
            } else {
                maxProfit = Math.max(maxProfit, nextBuy - currentBuy);
            }
        }
        return maxProfit;
    }
}
