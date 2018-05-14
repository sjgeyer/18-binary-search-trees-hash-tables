'use strict';

import BST from '../lib/binary-search-tree';
import Node from '../lib/binary-node';

describe('binary search tree', () => {
  test('NO CHILDREN REMOVE - should replace node with null', () => {
    const root = new Node(2);
    const tree = new BST(root);
    tree.insert(1);
    tree.insert(3);
    tree.remove(1);
    expect(tree.root.left).toBeNull();
  });
  test('ONE CHILD REMOVE - should replace node with child', () => {
    const root = new Node(2);
    const tree = new BST(root);
    tree.insert(1);
    tree.insert(3);
    tree.insert(4);
    tree.remove(3);
    expect(tree.root.right.value).toEqual(4);
  });
  test('TWO CHILDREN REMOVE - should replace node with child of next highest value', () => {
    const root = new Node(3);
    const tree = new BST(root);
    tree.insert(2);
    tree.insert(1);
    tree.insert(5);
    tree.insert(4);
    tree.insert(6);
    tree.remove(5);
    expect(tree.root.right.value).toEqual(6);
    expect(tree.root.right.left.value).toEqual(4);
  });
  test('should return null if number is not in tree', () => {
    const root = new Node(2);
    const tree = new BST(root);
    tree.insert(1);
    tree.insert(3);
    expect(tree.remove(5)).toBeNull();
  });
});
