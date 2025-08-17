const BinaryTree = require("./BinaryTree");
const BinarySearchTree = require("./BinarySearchTree");

const btree = new BinaryTree(10);

btree.insert(5);
btree.insert(18);
btree.insert(3);
btree.insert(7);
btree.insert(15);

console.log("pre order traversal ( root - left - right )");
btree.preOrderTraversal(btree.root);

console.log("in order traversal ( left - root - right )");
btree.inOrderTraversal(btree.root);

console.log("post order traversal ( left - right - root )");
btree.postOrderTraversal(btree.root);

let bst = new BinarySearchTree(10);

console.log("----- Binary Search Tree -----");

bst.Add(10);
bst.Add(5);
bst.Add(15);
bst.Add(7);

console.log(bst.Contains(7));

bst.Remove(5);

console.log(bst.Contains(5));
