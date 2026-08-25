class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const records = [];
        let totalSum = 0;

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                const previousRecord = records[records.length - 1] + records[records.length - 2];
                records.push(previousRecord);
            } else if (operations[i] === "C") {
                records.pop();
            } else if (operations[i] === "D") {
                const previousDouble = records[records.length - 1] * 2;
                records.push(previousDouble);
            } else {
                records.push(Number(operations[i]));
            }
        }

        for(let i =0 ; i< records.length ; i++) {
            totalSum+=records[i];
        }
        return totalSum;
    }
}
