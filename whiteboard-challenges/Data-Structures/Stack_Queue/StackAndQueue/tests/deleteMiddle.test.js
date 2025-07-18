const StackWithDeleteMiddle = require ("../DeleteMiddleElement/deleteMiddle");

test ("Deleting the middle element of a stack with odd number of elements", () => {
  const middleStack = new StackWithDeleteMiddle ();
  middleStack.push(10);
  middleStack.push(20);
  middleStack.push(30);
  middleStack.deleteMiddle();
  expect(middleStack.pop()).toBe(30);
  expect(middleStack.pop()).toBe(10);
  expect(middleStack.pop()).toBe("there is no value to poped , stack is empty");
});

test ("Deleting the middle element of a stack with even number of elements", () => {
  const middleStack = new StackWithDeleteMiddle ();
  middleStack.push(10);
  middleStack.push(20);
  middleStack.push(30);
  middleStack.push(40);
  middleStack.deleteMiddle();
  expect(middleStack.pop()).toBe(40);
  expect(middleStack.pop()).toBe(20);
  expect(middleStack.pop()).toBe(10);
  expect(middleStack.pop()).toBe("there is no value to poped , stack is empty");
});

test ("Deleting from an empty stack", () => {
  const middleStack = new StackWithDeleteMiddle ();
  middleStack.deleteMiddle();
  expect(middleStack.stack.isEmpty()).toBe(true);
});

test ("Deleting from a stack with one element", () => {
  const middleStack = new StackWithDeleteMiddle ();
  middleStack.push(10);
  expect(middleStack.deleteMiddle()).toBe("The stack have only one element");
});

