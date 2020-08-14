function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

/*  BINARY SEARCH TREE
  lookup    O(log N)
  insert    O(log N)
  delete    O(log N)

  O (log N)

  Level 0: 2^0 = 1
  Level 1: 2^1 = 2
  Level 2: 2^2 = 4
  Level 3: 2^3 = 8

  # of nodes = 2^h - 1        h = height
  log nodes = height

  log 100 = 2
*/
