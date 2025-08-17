const BinaryTree = require ("../BinaryTree");

test ("Pre-Order Traversal", () => {
  const tree = new BinaryTree (10);
  tree.insert(5);
  tree.insert(18);
  tree.insert(3);
  tree.insert(7);
  tree.insert(15);

  const result = tree.preOrderTraversal(tree.root);
  expect(result).toEqual([10,5,3,7,18,15]);
});

test ("In-Order Traversal", () => {
  const tree = new BinaryTree (10);
  tree.insert(5);
  tree.insert(18);
  tree.insert(3);
  tree.insert(7);
  tree.insert(15);

  const result = tree.inOrderTraversal(tree.root);
  expect(result).toEqual([3,5,7,10,15,18]);
});

test ("Post-Order Traversal", () => {
  const tree = new BinaryTree (10);
  tree.insert(5);
  tree.insert(18);
  tree.insert(3);
  tree.insert(7);
  tree.insert(15);

  const result = tree.postOrderTraversal(tree.root);
  expect(result).toEqual([3,7,5,15,18,10]);
});