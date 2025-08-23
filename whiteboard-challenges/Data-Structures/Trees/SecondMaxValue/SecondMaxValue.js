class FindSecondMax {
  constructor(tree) {
    this.tree = tree; 
  }

  secondMaxValue() {
    if (!this.tree.root) {
      throw new Error("Tree is empty");
    }

    let max = -Infinity;
    let secondMax = -Infinity;
    let foundSecond = false;

    function traverse(node) {
      if (!node) return;

      if (node.value > max) {
        secondMax = max;
        max = node.value;
        if (secondMax !== -Infinity) foundSecond = true;
      } else if (node.value > secondMax && node.value < max) {
        secondMax = node.value;
        foundSecond = true;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.tree.root);

    if (!foundSecond) {
      throw new Error("Tree does not have a second maximum");
    }

    return secondMax;
  }
}


module.exports = FindSecondMax;
