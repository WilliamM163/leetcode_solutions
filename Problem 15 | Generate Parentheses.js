/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    let array = []
    const genString = (string = "", open = 0, closed = 0) => {
        // Base Condition
        if (string.length == n*2) { array.push(string) }
        else {
            if (open < n) {
                genString(string+'(', open+1, closed)
            }
            if (closed < n && closed < open) {
                genString(string+')', open, closed+1)
            }
        }
    }
    genString()
    return array
};
