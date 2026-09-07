class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x: number): number {
        if (x < 2) return x;
        let low = 1;
        let high = Math.floor(x / 2);
        let ans = 0;
        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            const total = mid * mid;
            if (total === x) return mid;
            else if (total < x) {
                low = mid + 1;
                ans = mid;
            } else high = mid - 1;
        }
        return ans;
    }
}
