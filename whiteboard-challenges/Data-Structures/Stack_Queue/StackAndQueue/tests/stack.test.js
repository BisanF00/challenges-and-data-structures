const Stack = require ("../stack");

test ("pushing a node into the stack", () => {
  const stack = new Stack ();
  stack.push(10);
  expect(stack.top.data).toBe(10);
});

test ("popping a node from the stack", () => {
  const stack = new Stack ();
  stack.pop(10);
  expect(stack.data).toBe();
});

test ("checking if the stack is empty", () => {
  const stack = new Stack ();
  stack.isEmpty();
  expect(stack.top).toBe(null);
});