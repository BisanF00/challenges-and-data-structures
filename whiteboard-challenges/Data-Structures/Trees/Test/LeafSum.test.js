const FindLeafSum = require("../LeafSum/LeafSum");
const Node = require("../TNode");
const BinaryTree = require("../BinaryTree");

test("Calculating the sum of all leaf nodes in a binary tree", () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(9);
  Btree.root.left = new Node(8);
  Btree.root.right = new Node(12);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  Btree.root.right.left = new Node(17);
  Btree.root.right.right = new Node(23);
  Btree.root.left.left.right = new Node(4);

  const result = new FindLeafSum(Btree).leafSum();
  expect(result).toBe(51);
});

test("Calculating the sum of all leaf nodes in a binary tree with negative leaf values", () => {
  const Btree = new BinaryTree();
  Btree.root = new Node(9);
  Btree.root.left = new Node(8);
  Btree.root.right = new Node(12);
  Btree.root.left.left = new Node(3);
  Btree.root.left.right = new Node(7);
  Btree.root.right.left = new Node(-17);
  Btree.root.right.right = new Node(23);
  Btree.root.left.left.right = new Node(4);

  const result = new FindLeafSum(Btree).leafSum();
  expect(result).toBe(17);
});
