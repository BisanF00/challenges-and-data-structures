const linkedlist = require ("../linkedlist");
const reverseLinkedList = require ("../reverse/reverse");

test ("reversing a non empty list", () => {
  const list = new linkedlist ();
  list.add(1);
  list.add(2);
  list.add(3);
  reverseLinkedList(list);
  expect(list.head.data).toBe(3);
  expect(list.head.next.data).toBe(2);
});

test ("reversing a single node list", () => {
  const list = new linkedlist ();
  list.add(1);
  reverseLinkedList(list);
  expect(list.head.data).toBe(1);
  expect(list.head.next).toBe(null);
});

test ("reversing an empty list", () => {
  const list = new linkedlist ();
  reverseLinkedList(list);
  expect(list.head).toBe(null);
});

test ("reversing a list with duplicate values", () => {
  const list = new linkedlist ();
  list.add(1);
  list.add(2);
  list.add(2);
  list.add(3);
  reverseLinkedList(list);
  expect(list.head.data).toBe(3);
  expect(list.head.next.data).toBe(2);
  expect(list.head.next.next.data).toBe(2);
  expect(list.head.next.next.next.data).toBe(1);
});