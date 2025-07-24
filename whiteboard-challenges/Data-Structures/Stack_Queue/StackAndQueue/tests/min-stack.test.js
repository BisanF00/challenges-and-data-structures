const MinStack = require ("../MinStack/minStack");

test ("Retrieving the minimum element in the stack", () => {
  const minStack = new MinStack ();
  minStack.push(10);
  minStack.push(20);
  minStack.push(30);
  expect(minStack.getMin()).toBe(10);
});

test ("Popping elements and verifying the minimum element in the stack after the pop", () => {
  const minStack = new MinStack ();
  minStack.push(10);
  minStack.push(9);
  minStack.push(30);
  minStack.pop();
  expect(minStack.getMin()).toBe(9);
});

test ("Pushing elements and verifying the minimum element in the stack after the push", () => {
  const minStack = new MinStack ();
  minStack.push(10);
  minStack.push(9);
  minStack.push(30);
  minStack.push(3);
  expect(minStack.getMin()).toBe(3);
});

