class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];

        for (let token of tokens) {
            if (!["+", "-", "*", "/"].includes(token)) {
                stack.push(Number(token));
                continue;
            }

            let a = stack.pop();
            let b = stack.pop();

            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(b - a);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(Math.trunc(b / a));
                    break;
            }
        }
        return stack[0];
    }
}
