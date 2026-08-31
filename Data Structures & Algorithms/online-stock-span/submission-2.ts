class StockSpanner {
    stack: number[];
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let count = 1;
        for(let i = this.stack.length - 1; i >= 0 ; i--) {
            const prevPrice = this.stack[i];
            if(prevPrice <= price) count++;
            else break;
        }
        this.stack.push(price);
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
