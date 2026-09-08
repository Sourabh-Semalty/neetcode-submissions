class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        // if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
        for (let i = 0; i < matrix.length; i++) {
            let low = 0;
            let high = matrix[i].length - 1;

            while (low <= high) {
                let mid = low + Math.floor((high - low) / 2);
                if (matrix[i][mid] === target) return true;
                else if (matrix[i][mid] < target) low = mid + 1;
                else high = mid - 1;
            }
        }
        return false;
    }
}
