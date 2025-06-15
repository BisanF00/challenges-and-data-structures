const linkedlist = require ("./linkedList");

test ("adding node to the end of a linked list", () => {
  const list = new linkedlist ();
  list.add(50);
  expect(list.head.data).toBe(50);
});

test ("removing a node by value from the linked list", () => {
  const list = new linkedlist ();
  list.remove(50);
  expect(list.data).toBe();
});

test ("the node is exists in the linked list", () => {
  const list = new linkedlist ();
  list.add(50);
  let result = list.includes(50);
  expect(result).toBe(true);
});

test ("the node is exists in the linked list", () => {
  const list = new linkedlist ();
  list.add(50);
  let result = list.includes(10);
  expect(result).toBe(false);
});

test ("inserts a node at the specified index in the linked list", () => {
  const list = new linkedlist ();
  list.add(50);
  list.add(20);
  list.insertAt(10,1);
  expect(list.head.data).toBe(50);
  expect(list.head.next.data).toBe(10);
  expect(list.head.next.next.data).toBe(20);
})


