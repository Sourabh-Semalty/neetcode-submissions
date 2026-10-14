class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const counts = new Map();
        let maxLength = 0;
        let maxFreq = 0;
        let left = 0;
        for (let r = 0; r < s.length; r++) {
            const char = s[r];

            const currentCount = counts.get(char) || 0;
            counts.set(char, currentCount + 1);

            // Update the maximum frequency seen in the current window
            maxFreq = Math.max(maxFreq, counts.get(char));

            // Name the formula clearly so the 'if' condition reads like a sentence
            let replacementsNeeded = r - left + 1 - maxFreq;

            while (replacementsNeeded > k) {
                const leftChar = s[left];
                const leftCount = counts.get(leftChar) || 0;

                counts.set(leftChar, leftCount - 1);
                left++;

                replacementsNeeded = r - left + 1 - maxFreq;
            }

            maxLength = Math.max(maxLength, r - left + 1);
        }

        return maxLength;
    }
}
