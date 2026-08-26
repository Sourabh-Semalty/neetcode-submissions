class MyQueue {
    stack1: number[];
    stack2: number[];
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    moveElements() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
    }
    /**
     * @param {number} x
     * @return {void}
     */
    push(x: number): void {
        this.stack1.push(x);
    }

    /**
     * @return {number}
     */
    pop() {
        this.moveElements();
        return this.stack2.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        this.moveElements();
        return this.stack2[this.stack2.length - 1];
    }
    /**
     * @return {boolean}
     */
    empty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
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
