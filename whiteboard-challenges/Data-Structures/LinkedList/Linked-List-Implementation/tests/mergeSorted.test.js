const linkedlist = require ("../linkedlist");
const mergeSortedLists = require ("../MergeSorted/mergeSorted");

test('merging when one list is empty', () => {
  const list1 = new linkedlist ();
  mergeSortedLists(list1);
  expect(list1.head).toBe(null);
});

test('merging when both lists are empty', () => {
  const list1 = new linkedlist ();
  const list2 = new linkedlist ();
  mergeSortedLists(list1 && list2);
  expect(list1.head && list2.head).toBe(null);
});

test ("merging list1 and list2 from the second example", () => {
  const list1 = new linkedlist ();
  const list2 = new linkedlist ();
  list1.add(5);
  list1.add(10);
  list1.add(15);

  list2.add(2);
  list2.add(3);
  list2.add(20);
  const mergedList = mergeSortedLists(list1.head, list2.head);

  expect(mergedList.head.data).toBe(2);
  expect(mergedList.head.next.data).toBe(3);
  expect(mergedList.head.next.next.data).toBe(5);
  expect(mergedList.head.next.next.next.data).toBe(10);
  expect(mergedList.head.next.next.next.next.data).toBe(15);
  expect(mergedList.head.next.next.next.next.next.data).toBe(20);
});