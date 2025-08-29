class FindLeafSum {
  constructor(tree) {
    this.tree = tree;
  }

  leafSum() {
    if (!this.tree.root) {
      return "Tree is empty";
    }

    let sum = 0;

    function findSumLeaf(node) {
      if (!node) return;

      if (node.left == null && node.right == null) {
        sum += node.value;
      }

      findSumLeaf(node.left);
      findSumLeaf(node.right);
    }
    findSumLeaf(this.tree.root);
    return sum;
  }
}

module.exports = FindLeafSum;
