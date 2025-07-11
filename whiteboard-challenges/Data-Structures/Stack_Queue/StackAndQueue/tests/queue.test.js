const Queue = require ("../queue");

test ("enqueuing a node into the queue", () => {
  const queue = new Queue ();
  queue.enqueue(10);
  expect(queue.front.data).toBe(10);
});

test ("dequeuing a node from the queue", () => {
  const queue = new Queue ();
  queue.dequeue(10);
  expect(queue.data).toBe();
});

test ("checking if the queue is empty", () => {
  const queue = new Queue ();
  queue.isEmpty();
  expect(queue.front).toBe(null);
});