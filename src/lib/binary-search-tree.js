'use strict';

import inOrderTraversal from './in-order-traversal';
import BinaryNode from './binary-node';

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  insert(value) {
    const nodeToInsert = new BinaryNode(value); // eslint-disable-line
    if (!this.root) this.root = nodeToInsert;
    else {
      this._insert(this.root, nodeToInsert);
    }
  }
  _insert(rootNode, nodeToInsert) {
    if (nodeToInsert.value < rootNode.value) {
      if (!rootNode.left) {
        rootNode.left = nodeToInsert;
      } else {
        this._insert(rootNode.left, nodeToInsert);
      }
    } else if (!rootNode.right) {
      rootNode.right = nodeToInsert;
    } else {
      this._insert(rootNode.right, nodeToInsert);
    }
  }

  findParent(value) {
    if (!this.root) return null;
    return this._findParent(this.root, value);
  }
  _findParent(rootNode, value) {
    if (!rootNode) return null;
    if (!rootNode.right && !rootNode.left) return null;
    else if (rootNode.right.value === value || rootNode.left.value === value) {
      return rootNode;
    } else if (rootNode.right.value < value) {
      return this._findParent(rootNode.right, value);
    }
    return this._findParent(rootNode.left, value);
  }

  remove(value) {
    if (!this.root) return null;
    const parent = this.findParent(value);
    if (!parent) return null;
    return this._remove(parent, value);
  }
  _remove(parentNode, value) {
    let nodeToRemove;
    if (parentNode.right.value === value) {
      nodeToRemove = parentNode.right;
      this._checkForChildrenAndRemove('right', nodeToRemove, parentNode);
    } else {
      nodeToRemove = parentNode.left;
      this._checkForChildrenAndRemove('left', nodeToRemove, parentNode);
    }
  }

  _checkForChildrenAndRemove(side, nodeToRemove, parent) {
    if (!nodeToRemove.left && !nodeToRemove.right) { // no children
      parent[side] = null;
    } else if (!nodeToRemove.left && nodeToRemove.right) { // only right child
      parent[side] = nodeToRemove.right;
    } else if (nodeToRemove.left && !nodeToRemove.right) { // only left child
      parent[side] = nodeToRemove.left;
    } else { // two children
      const leftSubtree = nodeToRemove.left;
      const rightSubtreeValues = inOrderTraversal(nodeToRemove.right, []);
      parent[side] = new BinaryNode(rightSubtreeValues.shift(), leftSubtree);
      rightSubtreeValues.forEach(nodeValue => this.insert(nodeValue));
    }
  }
}

export default BinarySearchTree;
