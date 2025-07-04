const LinkedList = require ("../linkedlist");

function RotateLeft (k , head) {

  if (k === 0 || head === null) { // case 2
    return head;
  }
  
  let tail = head ;
  let length = 1;

  while (tail.next !== null) {
    tail = tail.next;
    length++;
  }

  if ( k > length) { // case 3
    k = k % length;
  }

  if ( k < 0) { // case 1
    k = length + (k % length);
  }

  let current = head ;
  for (let i =1 ; i <k ; i++) {
      current = current.next;
  }

  let newHead = current.next;
  current.next = null;
  tail.next = head;

  return newHead;
};

module.exports = RotateLeft;