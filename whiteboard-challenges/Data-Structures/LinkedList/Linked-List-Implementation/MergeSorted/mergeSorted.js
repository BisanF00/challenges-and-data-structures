const LinkedList = require ("../linkedlist");

function mergeSortedLists (head1 , head2) {
  const dummy = { data: null, next: null };
  let prev = dummy;
  let current1 = head1;
  let current2 = head2;

  if (current1 === null || current2 === null) {
    console.log ("The List is Empty")
    return ;
  }

  while (current1 && current2) {

    if (current1.data <= current2.data) {
      prev.next = current1;
      current1 = current1.next;
    } else {
      prev.next = current2;
      current2 = current2.next;
    }
    prev = prev.next;
  }

  if (current1) prev.next = current1;
  
  if (current2) prev.next = current2;
  
  const mergedList = new LinkedList();
  mergedList.head = dummy.next
  return mergedList;
};

module.exports = mergeSortedLists;