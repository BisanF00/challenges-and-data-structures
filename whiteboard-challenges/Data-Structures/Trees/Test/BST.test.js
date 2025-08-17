const BinarySearchTree = require ("../BinarySearchTree");

test ("Adding a node", () => {
  const tree = new BinarySearchTree ();
  tree.Add(10);
  tree.Add(5);
  tree.Add(15);
  tree.Add(7);

  expect(tree.Contains(10)).toBe(true);
  expect(tree.Contains(5)).toBe(true);
  expect(tree.Contains(15)).toBe(true);
  expect(tree.Contains(7)).toBe(true);
});

test ("Checking if a node exists", () => {
  const tree = new BinarySearchTree ();
  tree.Add(10);
  tree.Add(5);
  tree.Add(15);
  tree.Add(7);

  expect(tree.Contains(10)).toBe(true);
  expect(tree.Contains(7)).toBe(true);
  expect(tree.Contains(20)).toBe(false);
});

test ("Removing a node", () => {
  const tree = new BinarySearchTree (10);
  tree.Add(5);
  tree.Add(15);
  tree.Add(7);

  tree.Remove(5);

  expect(tree.Contains(5)).toBe(false);
});