class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height: number[]): number {
        let l = 0;
        let r = height.length - 1;
        let max = 0;
        while (l < r) {
            let width = r - l;
            max = Math.max(Math.min(height[l], height[r]) * width, max);
            height[l] < height[r] ? l++ : r--;
        }
        return max;
    }
}
