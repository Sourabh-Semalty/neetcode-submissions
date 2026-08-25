class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        if(s.length < 2) return false; 

        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === "}") {
                const removed = stack.pop();
                if (removed !== "{") return false;
            } else if (s.charAt(i) === ")") {
                const removed = stack.pop();
                if (removed !== "(") return false;
            } else if (s.charAt(i) === "]") {
                const removed = stack.pop();
                if (removed !== "[") return false;
            } else {
                stack.push(s[i]);
            }
        }

        return stack.length === 0 ? true : false; 
    }
}
