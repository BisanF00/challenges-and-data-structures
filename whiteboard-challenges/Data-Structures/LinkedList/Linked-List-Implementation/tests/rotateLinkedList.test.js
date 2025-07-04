const linkedlist = require ("../linkedlist");
const RotateLeft = require ("../RotateLikedList/rotateLinkedList");

test('rotating by k=0', () => {
  const list = new linkedlist ();
  const rotateList = RotateLeft( 0, list.head);
  expect(rotateList).toBe(null);
});

test ("rotating by a value greater than the list length (k=7)", () => {
  const list = new linkedlist ();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  list.add(5);
  list.add(6);

  const rotateList = RotateLeft( 7, list.head);

  expect(rotateList.data).toBe(2);
  expect(rotateList.next.data).toBe(3);
  expect(rotateList.next.next.data).toBe(4);
  expect(rotateList.next.next.next.data).toBe(5);
  expect(rotateList.next.next.next.next.data).toBe(6);
  expect(rotateList.next.next.next.next.next.data).toBe(1);
});