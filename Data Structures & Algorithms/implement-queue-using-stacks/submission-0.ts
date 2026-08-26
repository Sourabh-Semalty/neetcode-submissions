class MyQueue {
    stack:number[]
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.stack.push(x);
    }   

    /**
     * @return {number}
     */
    pop(): number {
        return this.stack.shift();
    }

    /**
     * @return {number}
     */
    peek(): number {
        return this.stack[0];
    }

    /**
     * @return {boolean}
     */
    empty(): boolean {
        return !this.stack.length;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
