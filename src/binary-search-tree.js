const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
/*
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
*/

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = new Node(null);
  }

  root() {
    return this._root;
  }

  add(value) {
    if (this._root.data == null) {
      this._root.data = value;
      return;
    }
    let currNode = this._root;
    while (true) {
      if (value > currNode.data) {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          currNode.right = new Node(value);
          break;
        }
      } else {
        if (currNode.left) {
          currNode = currNode.left;
        } else {
          currNode.left = new Node(value);
          break;
        }
      }
    }
  }

  has(value) {
    return this.find(value) ? true : false;
  }

  find(value) {
    
    if (this._root.data == null) {
      return null;
    }
    let currNode = this._root;
    while (true) {
      if (currNode.data == value) {
        return currNode;
      }

      if (value > currNode.data) {
        if (currNode.right) {
          currNode = currNode.right;
        } else {
          return null;
        }
      } else {
        if (currNode.left) {
          currNode = currNode.left;
        } else {
          return null;
        }
      }
    }
    
  }
 
  remove(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this._root.data == null) {
      return null;
    }
    let currNode = this._root;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    if (this._root.data == null) {
      return null;
    }
    let currNode = this._root;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree
};