const Node = require ("./classNode")

class LinkedList {
  constructor () {
    this.head = null;
  }

  add (data) {
    let newNode = new Node (data);

    if (this.head === null) {
      this.head = newNode ; 
      return;
    }

    let current = this.head ;

    while (current.next !== null) {
      current = current.next ;
    }

    current.next = newNode ;
  }

  remove (value) {
    let current = this.head;
    let prev = null;

    if (current === null) { // case 2 : removing a node from an empty linked list.
      console.log ("The list is empty")
      return ;
    }

    if (current.data === value) {
      this.head = current.next;
      return;
    }

    while (current!== null && current.data !== value) {
      prev = current;
      current = current.next;
    }

    if (current === null) { // case 3 : removing a node not exist in the linked list
      console.log ("Value not found");
      return;
    }

    prev.next = current.next;
  }

  includes (data) {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next
    }

    return false;
  }

  insertAt (data , index) {
    let node = new Node (data);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      
      let current = this.head;
      let length = 0;

      while (current !== null) {
        length++;
        current = current.next;
      }

      if (index > length || index < 0 ) { // case 4 : Inserting a node at an index greater than the length of the linked list.
        console.log ("Value is greater than the length of the linked list");
        return;
      }

      current = this.head;
      let prev = null;
      let value = 0;

      while (value < index) {
        prev = current;
        current = current.next;
        value++;
      }
      prev.next = node;
      node.next = current;
    }
  }

  printList (){
    let current = this.head;

    if (current === null) { // case 1 : calling printList() on an empty list.
      console.log ("The list is empty");
      return;
    }

    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      console.log(current.data);
      current = current.next;
    }
    console.log("Head ->", result , "Null");
  }
}

module.exports = LinkedList;