class TimeMap {
    keyStore: any;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {

        if(!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }

        this.keyStore.get(key).push({value,timestamp});
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const data = this.keyStore.get(key);

        if(!data || data.length === 0) return ""; 

        let left =0;
        let right = data.length - 1;
        let result = ""

        while(left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if(data[mid].timestamp === timestamp) return data[mid].value;
            else if(data[mid].timestamp < timestamp) {
                result = data[mid].value;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }
}
