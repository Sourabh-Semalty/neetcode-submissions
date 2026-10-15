class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        // if s1 size is greater than s2 it is not possible to have permutation
        if (s1.length > s2.length) return false;

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);
        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++;
            s2Count[s2.charCodeAt(i) - 97]++;
        }

        // check every window for the same size
        for (let r = s1.length; r < s2.length; r++) {
            if (s1Count.every((count, i) => count === s2Count[i])) {
                return true;
            }

            // Add the new charater entering the window
            const newChar = s2.charCodeAt(r) - 97;
            s2Count[newChar]++;

              // Remove the character leaving the window
            const oldChar = s2.charCodeAt(r - s1.length) - 97;
            s2Count[oldChar]--;
        }

        // Check the final window
        return s1Count.every((count, i) => count === s2Count[i]);
    }
}
