const TNode = require("./TNode");

class BinaryTree {
  constructor(root) {
    this.root = new TNode(root);
  }

  insert(value) {
    this.insertNodeHelper(this.root, value);
  }

  insertNodeHelper(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TNode(value);
      } else {
        this.insertNodeHelper(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TNode(value);
      } else {
        this.insertNodeHelper(node.right, value);
      }
    }
  }

  inOrderTraversal(node, result = []) {
    if (!node) return;

    this.inOrderTraversal(node.left, result);
    result.push(node.value);
    console.log(node.value);
    this.inOrderTraversal(node.right, result);
    return result;
  }

  preOrderTraversal(node, result = []) {
    if (!node) return result;

    result.push(node.value);
    console.log(node.value);
    this.preOrderTraversal(node.left, result);
    this.preOrderTraversal(node.right, result);
    return result;
  }

  postOrderTraversal(node, result = []) {
    if (!node) return;

    this.postOrderTraversal(node.left, result);
    this.postOrderTraversal(node.right, result);
    result.push(node.value);
    console.log(node.value);
    return result;
  }

  // insert(value) {
  //   const newNode = new TNode(value);

  //   if (!this.root) {
  //     this.root = newNode;
  //     return;
  //   }

  //   let current = this.root;

  //   while (true) {
  //     if (value < current.value) {
  //       if (!current.left) {
  //         current.left = newNode;
  //         break;
  //       }
  //       current = current.left;
  //     } else {
  //       if (!current.right) {
  //         current.right = newNode;
  //         break;
  //       }
  //       current = current.right;
  //     }
  //   }
  // }
}

module.exports = BinaryTree;
