// https://www.geeksforgeeks.org/binary-tree-set-1-introduction/
class TreeNode {
  val: number | string;
  right: null | TreeNode;
  left: null | TreeNode;

  constructor(val, left?, right?) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BinarySearchTree {
  root: null | TreeNode;

  constructor() {
    this.root = null;

    this.insert = this.insert.bind(this);
    this.remove = this.remove.bind(this);
  }

  // helper method which creates a new node to
  // be inserted and calls insertNode
  insert(data: number): TreeNode {
    const newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    return this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  private insertNode(node: TreeNode, newNode: TreeNode): TreeNode {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }

    return this.root;
  }

  remove(data: number) {}
}

const a = new BinarySearchTree();
a.insert(1);
a.insert(2);
a.insert(4);
a.insert(-4);
a.insert(10);

console.log(a);