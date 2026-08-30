class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const res = new Array(temperatures.length).fill(0);
        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const curTemp = temperatures[i];
            while (stack.length > 0 && curTemp > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([curTemp, i]);
        }
        return res;
    }
}
