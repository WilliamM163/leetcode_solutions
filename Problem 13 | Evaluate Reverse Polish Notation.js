/*
    EVALUATE REVERSE POLISH NOTATION
    You are given an array of strings tokens that represents an
    arithmetic expression in a Reverse Polish Notation.

    Evaluate the expression. Return an integer that represents the value
    of the expression.
*/

class Stack {
    constructor() {
        this._data = []
    }

    isEmpty() {
        return this._data.length === 0
    }
    push(data) {
        this._data.push(data)
    }
    pop() {
        if (this.isEmpty()) { return undefined }
        return this._data.pop()
    }
    peek() {
        if (this.isEmpty()) { return undefined }
        return this._data[this._data.length - 1]
    }
}

const evalRPN = function(tokens) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b),
    }

    const stack = new Stack()

    // Iterate through all tokens
    for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i]

        // If the token is a number, push it onto the stack
        if (!operations[token]) {
            stack.push(Number(token))
        } else {
            // If the token is an operator, pop two operands, perform the operation,
            // and push the result back onto the stack
            const b = stack.pop()
            const a = stack.pop()
            const func = operations[token]
            const result = func(a, b)
            stack.push(result)
        }
    }
    // The final result will be the only element left in the stack
    return stack.pop()
}

// let tokens = ["2","1","+","3","*"]
// console.log(evalRPN(tokens))
// tokens = ["4","13","5","/","+"]
// console.log(evalRPN(tokens))
// tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// console.log(evalRPN(tokens))