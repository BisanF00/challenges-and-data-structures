const LinkedList = require ("./linkedlist");
const reverseLinkedList = require ("./reverse/reverse");
const mergeSortedLists = require ("./MergeSorted/mergeSorted");
const RotateLeft = require ("./RotateLikedList/rotateLinkedList");

const list = new LinkedList ();
// const list1 = new LinkedList ();
// const list2 = new LinkedList ();

// list.add (5);
// list.add (10);
// list.add (20);
// list.add (30);

// list.printList ();

// list.remove (10);

// list.printList ();

// console.log(list.includes(20));
// console.log(list.includes(10));

// list.insertAt (15,2);

// list.printList ();

// // list.add (15);
// // list.add (2);
// // list.add (3);
// // list.add (4);

// // list.printList ();

// reverseLinkedList (list);
// list.printList ();

// list1.add (1);
// list1.add (3);
// list1.add (5);

// list2.add (2);
// list2.add (4);
// list2.add (6);

// const mergedList = mergeSortedLists(list1.head, list2.head);
// mergedList.printList();

list.add (10);
list.add (20);
list.add (30);
list.add (40);
list.add (50);

let newHead = RotateLeft(3, list.head);
console.log(newHead);

const rotatedList = new LinkedList();
rotatedList.head = newHead;
 
rotatedList.printList();





