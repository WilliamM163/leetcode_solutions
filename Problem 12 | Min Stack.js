/*
    MIN STACK
    Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    Implement the MinStack class:
    -   MinStack() initializes the stack object.
    -   void push(int val) pushes the element val onto the stack.
    -   void pop() removes the element on the top of the stack.
    -   int top() gets the top element of the stack.
    -   int getMin() retrieves the minimum element in the stack.

    You must implement a solution with O(1) time complexity for each function.
*/

class MinStack {
    constructor() {
        this._data = []
    }

    isEmpty() { return this._data.length === 0 }
    push(value) {
        if (typeof value !== "number") { return }
        else if (this.isEmpty()) { this._data.push({ value: value, min: value }) }
        else {
            const prevMin = this.getMin()
            const newMin = value < prevMin ? value : prevMin
            this._data.push({ value: value, min: newMin })
        }
    }
    pop() {
        if (this.isEmpty()) { return undefined }
        const obj = this._data.pop()
        return obj.value
    }
    top() {
        if (this.isEmpty()) { return undefined }
        return this._data[this._data.length - 1].value
    }
    getMin() {
        if (this.isEmpty()) { return undefined }
        const obj = this._data[this._data.length - 1]
        return obj.min
    }
}