class FreqStack {
    counts: Map<number, number>;
    groups: Map<number, number[]>;
    maxFreq: number;
    constructor() {
        this.counts = new Map();
        this.groups = new Map();
        this.maxFreq = 0;
    }

    push(val: number): void {
        // 1: Get the frequency of the value from the counts;
        const currentFreq = (this.counts.get(val) || 0) + 1;
        this.counts.set(val, currentFreq);

        // 2 Updated maxFreq if currentFreq is greater
        if (currentFreq > this.maxFreq) {
            this.maxFreq = currentFreq;
        }

        // 3. Push the value into the stack corresponding to its current frequency level
        if (!this.groups.has(currentFreq)) {
            this.groups.set(currentFreq, []);
        }

        this.groups.get(currentFreq).push(val);
    }

    /**
     * @return {number}
     */
    pop(): number {
        // Get current maxFrequency element
        const currentMaxStack = this.groups.get(this.maxFreq);

        // Pop the element
        const val = currentMaxStack.pop();

         // 3. Decrement the frequency count for this number
        this.counts.set(val, this.maxFreq - 1);

        // 4. If there are no more numbers left at this max frequency level, drop the maxFreq counter by 1
        if (currentMaxStack.length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}
