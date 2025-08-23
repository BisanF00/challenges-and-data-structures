const FindSecondMax = require ("../SecondMaxValue/SecondMaxValue");
const Node = require ("../TNode")
const BinaryTree = require("../BinaryTree");

test ("Finding the maximum value in a binary tree", () => {
  const Btree = new BinaryTree ();
  Btree.root = new Node (10);
  Btree.root.left = new Node (5);
  Btree.root.right = new Node (20);
  Btree.root.left.left = new Node (3);
  Btree.root.left.right = new Node (7);
  Btree.root.right.left = new Node (15);
  Btree.root.right.right = new Node (25);

  const result = new FindSecondMax(Btree).secondMaxValue();
  expect(result).toBe(20);
});

test ("Finding the maximum value in a binary tree with only one node", () => {
  const Btree = new BinaryTree ();
  Btree.root = new Node (10);
  Btree.root.left = new Node (5);

  const result = new FindSecondMax(Btree).secondMaxValue();
  expect(result).toBe(5);
});

test ("Finding the maximum value in a binary tree having negative values", () => {
  const Btree = new BinaryTree ();
  Btree.root = new Node (-10);
  Btree.root.left = new Node (5);
  Btree.root.right = new Node (20);
  Btree.root.left.left = new Node (3);

  const result = new FindSecondMax(Btree).secondMaxValue();
  expect(result).toBe(5);
});

