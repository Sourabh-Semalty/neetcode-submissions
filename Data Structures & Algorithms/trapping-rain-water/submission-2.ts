class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let waterTrapped = 0;
        let n = height.length - 1;
        let left = 0;
        let right = n;
        let leftMax = height[0];
        let rightMax = height[n];

        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                waterTrapped += leftMax - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                waterTrapped += rightMax - height[right];
            }
        }
        return waterTrapped;
    }
}
