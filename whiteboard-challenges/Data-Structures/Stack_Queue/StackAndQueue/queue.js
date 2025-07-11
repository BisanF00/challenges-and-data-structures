const Node = require ("./classNode");

class queue {
  constructor () {
    this.front = null;
    this.end = null;
  }

  enqueue (data) {
    const newnode = new Node (data);

    if (!this.front) {
      this.front = this.end = newnode;
    } else {
      this.end.next = newnode;
      this.end = newnode;
    }
  }

  dequeue () {
    if (!this.front) {
      return ("there is no value to dequeued , queue is empty");
    }

    const dequeued = this.front.data ;
    this.front = this.front.next;

    return dequeued ;
  }

  peek () {
    return this.front ? this.front.data : null;
  }

  isEmpty () {
    return this.front === null;
  }

  printQueue () {
    const result = [];

    let current = this.front;

    while (current !== null) {
      result.push (current.data);
      current = current.next;
    }
    console.log("Queue :","Front ->", result.join (" -> "));
  }
}

module.exports = queue;