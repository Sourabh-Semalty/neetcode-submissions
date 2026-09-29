class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const merged = nums1.concat(nums2);
        merged.sort((a, b) => a - b);

        const totalLen = merged.length;
        if (totalLen % 2 === 0) {
            return (merged[totalLen / 2 -1] + merged[totalLen / 2]) / 2.0;
        } else {
            return merged[Math.floor(totalLen / 2)];
        }
    }
}
