class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    canEatAllBanans(piles: number[], speed: number, h: number) {
        let hoursTookToEat = 0;
        for (const pile of piles) {
            hoursTookToEat += Math.ceil(pile / speed);
        }
        return hoursTookToEat <= h;
    }

    minEatingSpeed(piles: number[], h: number): number {
        let low = 1;
        let high = 0;
        for (const pile of piles) {
            high = Math.max(pile, high);
        }

        let ans = 0;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            // It means koko can eat all banana let's get lower speed
            if (this.canEatAllBanans(piles, mid, h)) {
                ans = mid;
                high = mid - 1;
            } else {
                // it means couln't able to eat we need increase the speed
                low = mid + 1;
            }
        }
        return ans;
    }
}
