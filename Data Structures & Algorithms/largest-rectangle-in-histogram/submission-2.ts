class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
    const nextSmaller = new Array(n).fill(n);
    const prevSmaller = new Array(n).fill(-1);
    let stack = [];

    // Step 1: Find Next Smaller Element indices
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            nextSmaller[stack.pop()] = i;
        }
        stack.push(i);
    }

    stack = []; // Clear stack for the next pass

    // Step 2: Find Previous Smaller Element indices
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            prevSmaller[stack.pop()] = i;
        }
        stack.push(i);
    }

    // Step 3: Calculate Maximum Area
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = nextSmaller[i] - prevSmaller[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    }
}
