const LinkedList = require ("./linkedlist");
const reverseLinkedList = require ("./reverse/reverse");

const list = new LinkedList ();

list.add (5);
list.add (10);
list.add (20);
list.add (30);

list.printList ();

list.remove (10);

list.printList ();

console.log(list.includes(20));
console.log(list.includes(10));

list.insertAt (15,2);

list.printList ();

// list.add (15);
// list.add (2);
// list.add (3);
// list.add (4);

// list.printList ();

reverseLinkedList (list);
list.printList ();



