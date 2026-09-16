class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums: number[], target: number): boolean {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (nums[mid] === target) return true;

            if (nums[left] < nums[mid]) {
                if (nums[left] <= target && target < nums[mid]) {
                    // this means our target lies in the left side area
                    right = mid - 1;
                } else {
                    // as target is not lesser than mid that means it is on right side
                    left = mid + 1;
                }
            } else if (nums[left] > nums[mid]) {
                if (nums[mid] < target && target <= nums[right]) {
                    // this means our middle is less and target is less than right out answer lies in right
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            } else {
                left++;
            }
        }
        return false;
    }
}
