class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */

    canSplit(nums: number[], largest: number, k: number): boolean {
        let subArray = 1;
        let curSum = 0;

        for (const num of nums) {
            curSum += num;
            if (curSum > largest) {
                subArray++;
                if (subArray > k) return false;
                curSum = num;
            }
        }
        return true;
    }

    splitArray(nums: number[], k: number): number {
        let left = Math.max(...nums);
        let right = nums.reduce((a, b) => a + b, 0);
        let result = right;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (this.canSplit(nums,mid, k)) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
}
