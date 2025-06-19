const LinkedList = require ("../linkedlist");

function reverse (linkedList) {
  let current = linkedList.head;
  let prev = null;
  let value = [];

  // case 1 & 2 : Empty list (head is null) & Single node list
  if (linkedList.head === null || linkedList.head.next === null) { 
    return linkedList;
  } 

  while (current !== null) {

    // case 3 : List with duplicate values
    if (value.includes(current.data)) {
      console.log("Duplicate value detected:", current.data);
    }

    value.push (current.data)

    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  linkedList.head = prev;
  return linkedList;
}

module.exports = reverse;