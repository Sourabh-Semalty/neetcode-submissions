class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path: string): string {
        const stack: string[] = [];

        const parts = path.split("/");
        for (let i = 0; i < parts.length; i++) {
            if (parts[i] === "" || parts[i] === ".") continue;

            if (parts[i] === "..") {
                if (stack.length > 0) stack.pop();
            } else {
                stack.push(parts[i]);
            }
        }

        return "/" + stack.join("/");
    }
}
