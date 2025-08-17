const TNode = require("./TNode");

class BinarySearchTree {
  constructor(root) {
    this.root = new TNode(root);
  }

  Add(value) {
    this.addNodeHelper(this.root, value);
    console.log(value);
  }

  addNodeHelper(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TNode(value);
      } else {
        this.addNodeHelper(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TNode(value);
      } else {
        this.addNodeHelper(node.right, value);
      }
    }
  }

  Contains(value) {
    return this.containsHelper(this.root, value);
  }

  containsHelper(node, value) {
    if (node === null) return false;
    if (node.value === value) return true;
    if (value < node.value) {
      return this.containsHelper(node.left, value);
    } else {
      return this.containsHelper(node.right, value);
    }
  }

  Remove(value) {
    this.root = this.removeNodeHelper(this.root, value);
  }

  removeNodeHelper(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.removeNodeHelper(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeNodeHelper(node.right, value);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      let minNode = this.findMin(node.right);
      node.value = minNode.value;
      node.right = this.removeNodeHelper(node.right, minNode.value);
    }
    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

module.exports = BinarySearchTree;
