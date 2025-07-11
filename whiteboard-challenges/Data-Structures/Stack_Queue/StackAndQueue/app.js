const stack = require ("./stack");
const queue = require ("./queue");

const Stack = new stack ();
const Queue = new queue ();

Stack.push (10);
Stack.push (20);
Stack.push (30);

Stack.printStack ();

console.log(Stack.pop());
console.log(Stack.peek());
console.log(Stack.isEmpty());

Stack.pop ();
Stack.pop ();

console.log(Stack.isEmpty());

Queue.enqueue (10);
Queue.enqueue (20);
Queue.enqueue (30);

Queue.printQueue ();

console.log(Queue.dequeue());
console.log(Queue.peek());
console.log(Queue.isEmpty());

Queue.dequeue ();
Queue.dequeue ();

console.log(Queue.isEmpty());