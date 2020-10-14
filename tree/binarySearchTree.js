class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function minNode(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  search(value) {
    return this.searchNode(this.root, value);
  }
  searchNode(node, value) {
    if (!node) {
      return false;
    }
    if (value > node.value) {
      return this.searchNode(node.right, value);
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return true;
    }
  }
  min() {
    let node = this.root;
    if (!node) {
      return null;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }
  max() {
    let node = this.root;
    if (!node) {
      return null;
    }
    while (node.right) {
      node = node.right;
    }
    return node.value;
  }
  /*---------------------遍历---------------------*/
  inOrderTraverse() {
    let res = [];
    this.inOrder(this.root, res);
    return res;
  }
  inOrder(node, res) {
    if (!node) {
      return;
    }
    this.inOrder(node.left, res);
    res.push(node.value);
    this.inOrder(node.right, res);
  }
  preOrderTraverse() {
    let res = [];
    this.preOrder(this.root, res);
    return res;
  }
  preOrder(node, res) {
    if (!node) {
      return;
    }
    res.push(node.value);
    this.preOrder(node.left, res);
    this.preOrder(node.right, res);
  }
  postOrderTraverse() {
    let res = [];
    this.postOrder(this.root, res);
    return res;
  }
  postOrder(node, res) {
    if (!node) {
      return;
    }
    this.postOrder(node.left, res);
    this.postOrder(node.right, res);
    res.push(node.value);
  }
  /*--------------------删除-------------------------*/
  remove(value) {
    return this.removeNode(this.root, value);
  }
  removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value > node.value) {
      node.right = this.removeNode(node.right, value);
    } else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let min = minNode(node.right);
        node.value = min.value;
        this.removeNode(node.right, min.value);
        return node;
      }
    }
    return node;
  }
}
