const Node = require ("./classNode");

class stack {
  constructor () {
    this.top = null;
  }

  push (data) {
    const newnode = new Node (data);

    newnode.next = this.top;
    this.top = newnode;
  }

  pop () {
    if (!this.top) {
      return ("there is no value to poped , stack is empty");
    }

    const poped = this.top.data ;
    this.top = this.top.next;

    return poped ;
  }

  peek () {
    return this.top ? this.top.data : null;
  }

  isEmpty () {
    return this.top === null;
  }

  printStack () {
    let current = this.top;

    const result = [];

    while (current) {
      result.push (current.data);
      current = current.next;
    }
    console.log("Stack :","Top ->", result.join (" -> "));
  }
}

module.exports = stack;