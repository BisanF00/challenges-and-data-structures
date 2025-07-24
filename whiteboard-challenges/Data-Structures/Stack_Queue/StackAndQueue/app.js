const stack = require ("./stack");
const queue = require ("./queue");
const StackWithDeleteMiddle = require ("./DeleteMiddleElement/deleteMiddle");
const MinStack = require ("./MinStack/minStack");

// const Stack = new stack ();
// const Queue = new queue ();

// Stack.push (10);
// Stack.push (20);
// Stack.push (30);

// Stack.printStack ();

// console.log(Stack.pop());
// console.log(Stack.peek());
// console.log(Stack.isEmpty());

// Stack.pop ();
// Stack.pop ();

// console.log(Stack.isEmpty());

// Queue.enqueue (10);
// Queue.enqueue (20);
// Queue.enqueue (30);

// Queue.printQueue ();

// console.log(Queue.dequeue());
// console.log(Queue.peek());
// console.log(Queue.isEmpty());

// Queue.dequeue ();
// Queue.dequeue ();

// console.log(Queue.isEmpty());

// const Stack = new StackWithDeleteMiddle ();

// Stack.push (7);
// Stack.push (14);
// Stack.push (3);
// Stack.push (8);
// Stack.push (5);

// Stack.printStack ();

// Stack.deleteMiddle();

// Stack.printStack ();

// Stack.push (2);
// Stack.push (9);
// Stack.push (11);

// Stack.printStack ();

// Stack.deleteMiddle();

// Stack.printStack ();

const minStack = new MinStack ();

minStack.push (15);
minStack.push (7);
minStack.push (12);
minStack.push (3);

minStack.printStack ();

let min = minStack.getMin ();

console.log ("min:", min);

let popped = minStack.pop ();

console.log ("popped:", popped);

minStack.printStack ();

min = minStack.getMin ();

console.log ("min:", min);

let peeked = minStack.top ();

console.log ("peeked:", peeked);

minStack.push (2);
minStack.printStack ();

min = minStack.getMin ();

console.log ("min:", min);

let isEmpty = minStack.isEmpty();

console.log ("isEmpty:", isEmpty);