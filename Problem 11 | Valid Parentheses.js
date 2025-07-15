/*
    VALID PARENTHESES
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
    determine if the input string is valid.
    An input string is valid if:
    - Open brackets must be closed by the same type of brackets.
    - Open brackets must be closed in the correct order.
    - Every close bracket has a corresponding open bracket of the same type.
*/

class Stack {
    constructor() {
        this.__data__ = []
    }

    isEmpty() { return this.__data__.length === 0 }
    push(data) { this.__data__.push(data) }
    pop() { return this.__data__.pop() }
    peek() {
        if (this.isEmpty()) { return undefined }
        return this.__data__[this.__data__.length - 1]
    }
}

const isValid = function (string) {
    pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const stack = new Stack()
    for (const char of string) {
        if (pairs[char]) { // If character is closing bracket
            if (stack.peek() === pairs[char]) { // If closing bracket matches opening bracket
                stack.pop()
            } else {
                return false
            }
        } else { // If character is not closing bracket
            stack.push(char)
        }
    }

    return stack.isEmpty() // If stack is empty we return true, else false
}

console.log(isValid("()[]{}"))