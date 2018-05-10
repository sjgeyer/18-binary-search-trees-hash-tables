'use strict';

import Queue from 'queue-fifo';
import Stack from 'stack-lifo';

export default class KAryTree {
  constructor(root) {
    this.root = root;
  }

  find(value) {
    if (!this.root) return null;
    return this._find(this.root, value);
  }

  _find(currentRoot, value) { // eslint-disable-line
    const queue = new Queue();
    queue.enqueue(currentRoot);
    let currentNode = null;
    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      if (currentNode.value === value) return currentNode;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return null;
  }

  toString(str) {
    let values = str || '';
    if (!this.root) return null;
    const queue = new Queue();
    queue.enqueue(this.root);
    let currentNode = null;
    while (!queue.isEmpty()) {
      currentNode = queue.dequeue();
      values += `${currentNode.value}\n`;
      for (let i = 0; i < currentNode.children.length; i++) {
        queue.enqueue(currentNode.children[i]);
      }
    }
    return values;
  }

  toArray(arr) {
    const values = arr || [];
    if (!this.root) return null;
    const stack = new Stack();
    stack.push(this.root);
    const stackAllChildren = (node) => {
      for (let i = 0; i < node.children.length; i++) {
        stack.push(node.children[i]);
        if (node.children.length > 0) {
          stackAllChildren(node.children[i]);
        }
      }
    };
    stackAllChildren(this.root);
    while (!stack.isEmpty()) {
      values.push(stack.pop().value);
    }
    return values;
  }
}
