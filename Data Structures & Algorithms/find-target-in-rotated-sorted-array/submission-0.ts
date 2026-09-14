class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        if (nums.length === 0) return -1;

        let left = 0;
        let right = nums.length - 1;

        // Step 1: Find the pivot (index of the smallest element)
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            console.log(left, right, mid);
            if (nums[mid] > nums[right]) {
                left = mid + 1; // Pivot must be to the right
            } else {
                right = mid;    // Pivot could be mid or to the left
            }
        }
        console.log(left);

        let pivot = left;
        left = 0;
        right = nums.length - 1;

        // Step 2: Determine which sorted subarray contains the target
        if (target >= nums[pivot] && target <= nums[right]) {
            left = pivot;       // Target is in the right sorted portion
        } else {
            right = pivot - 1;  // Target is in the left sorted portion
        }

        // Step 3: Run standard binary search on the chosen portion
        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}
