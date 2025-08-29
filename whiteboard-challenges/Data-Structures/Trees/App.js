const Node = require ("./TNode")
const BinaryTree = require("./BinaryTree");
const BinarySearchTree = require("./BinarySearchTree");
const FindSecondMax = require ("./SecondMaxValue/SecondMaxValue");
const FindLeafSum = require ("./LeafSum/LeafSum");

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

let Btree = new BinaryTree();

Btree.root = new Node(10);
Btree.root.left = new Node(5);
Btree.root.right = new Node(20);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(15);
Btree.root.right.right = new Node(25);

let secondMax = new FindSecondMax(Btree);

console.log("----- Second Max Value -----");
console.log("Second Max Value : ",secondMax.secondMaxValue());

Btree.root = new Node(9);
Btree.root.left = new Node(8);
Btree.root.right = new Node(12);
Btree.root.left.left = new Node(3);
Btree.root.left.right = new Node(7);
Btree.root.right.left = new Node(17);
Btree.root.right.right = new Node(23);
Btree.root.left.left.right = new Node(4);

let leafSum = new FindLeafSum(Btree);

console.log("----- Leaf Sum -----");
console.log("Leaf Sum : ",leafSum.leafSum());