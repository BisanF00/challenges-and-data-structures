const Stack = require("../stack");

class MinStack {
  constructor() {
    this.stack = new Stack ();
    this.minStack = [];
  }

  push(data) {
    this.stack.push(data);
    if (
      this.minStack.length === 0 ||
      data <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(data);
    } else {
      this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
  }

  pop() {
    if (this.isEmpty()) return ("The stack is empty");
    this.minStack.pop();
    return this.stack.pop ();
  }

  top() {
    return this.stack.peek();
  }

  isEmpty() {
    return this.stack.isEmpty();
  }

  getMin() {
    if (this.minStack.length > 0) {
      return this.minStack[this.minStack.length - 1];
    }
    return ("The stack is empty");
  }

  printStack() {
    this.stack.printStack();
  }
}

module.exports = MinStack;
