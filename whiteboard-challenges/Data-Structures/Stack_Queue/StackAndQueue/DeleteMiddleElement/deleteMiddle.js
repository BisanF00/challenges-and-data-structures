const Stack = require ("../stack");

class StackWithDeleteMiddle {
  constructor () {
    this.stack = new Stack ();
  }

  push (data) {
    this.stack.push (data);
  }

  pop() {
    return this.stack.pop();
  }

  printStack () {
    this.stack.printStack ();
  }

  deleteMiddle () {
    if (this.stack.isEmpty ()) {
      console.log("The stack is empty");
      return;
    }

    let current = this.stack.top ;
    let length = 0;

    while (current) {
      length ++ ;
      current = current.next;
    }

    const tempStack = [];
    let middleValue;

    if (length % 2 === 0) {
      middleValue = Math.floor(length / 2) -1;
    }else {
      middleValue = Math.floor(length / 2);
    }

    if (length <= 1) {
      return "The stack have only one element";
    }

    for (let i=0 ; i < middleValue ; i++){
      tempStack.push (this.stack.pop ());
    }
    this.stack.pop ();

    while (tempStack.length > 0) {
      this.stack.push (tempStack.pop());
    }
  }
}

module.exports = StackWithDeleteMiddle;