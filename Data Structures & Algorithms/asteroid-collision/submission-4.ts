class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids: number[]): number[] {
        const stack: number[] = [];

        for (let i = 0; i < asteroids.length; i++) {
            let isDestroyed = false;
            const asteroid = asteroids[i];

            while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
                const top = stack[stack.length - 1];

                if (top < Math.abs(asteroid)) {
                    // This means top asteriod will be destroyed
                    stack.pop();
                } else if (top === Math.abs(asteroid)) {
                    stack.pop();
                    isDestroyed = true;
                    break;
                } else {
                    // current asteriod is destroyed
                    isDestroyed = true;
                    break;
                }
            }

            if (!isDestroyed) {
                stack.push(asteroid);
            }
        }
        return stack;
    }
}
