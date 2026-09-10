class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */

    canShip(weights:number[], maxDays: number, capacity :number) {
        let currentWeight = 0;
        let daysTookToLoad = 1;
        for(const weight of weights) {
            if(currentWeight + weight > capacity) {
                daysTookToLoad+=1; // increase the days;
                currentWeight = weight // reset the weight ( because this weight we can't add)

                if(daysTookToLoad > maxDays) return false;
            } else {
                currentWeight+=weight;
            }
        }
        return true;
    }

    shipWithinDays(weights: number[], days: number): number {
        let low = 0;
        let high = 0;
        for (const weight of weights) {
            low = Math.max(low, weight);
            high += weight;
        }

        let leastWeightCapacity = high;
        while (low <= high) {
            let capacity = low + Math.floor((high - low) / 2);

            if(this.canShip(weights, days, capacity)) {
                leastWeightCapacity = capacity; 
                high = capacity - 1;
            } else {
                low = capacity + 1;
            }
        }
        return leastWeightCapacity;
    }
}
