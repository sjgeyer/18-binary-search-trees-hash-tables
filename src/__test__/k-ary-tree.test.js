'use strict';

import KAryTree from '../lib/k-ary-tree';
import KAryNode from '../lib/k-ary-node';

describe('k-ary tree', () => {
  describe('testing find()', () => {
    test('should return node with input value', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      const ktree = new KAryTree(one);
      expect(ktree.find(3).value).toEqual(3);
    });
    test('should return null if input value is not in tree', () => {
      const one = new KAryNode(1);
      const ktree = new KAryTree(one);
      expect(ktree.find(4)).toBeNull();
    });
    test('should return null if tree is empty', () => {
      const ktree = new KAryTree();
      expect(ktree.find(1)).toBeNull();
    });
  });

  describe('testing toString()', () => {
    test('should return values in breadth-first traversal order separated by new lines', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      const ktree = new KAryTree(one);
      expect(ktree.toString('')).toEqual('1\n2\n3\n4\n');
    });
    test('should have same return even if string is not passed', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      const ktree = new KAryTree(one);
      expect(ktree.toString()).toEqual('1\n2\n3\n4\n');
    });
    test('should return null if tree is empty', () => {
      const ktree = new KAryTree();
      expect(ktree.toString()).toBeNull();
    });
  });

  describe('testing toArray()', () => {
    test('should return array with all values in depth-first traversal order', () => {
      const one = new KAryNode(1);
      one.appendChild(2);
      one.appendChild(3);
      one.appendChild(4);
      one.children[2].appendChild(5);
      one.children[2].appendChild(6);
      one.children[2].appendChild(7);
      const ktree = new KAryTree(one);
      expect(ktree.toArray([])).toEqual([7, 6, 5, 4, 3, 2, 1]);
    });
    test('should return null if tree is empty', () => {
      const ktree = new KAryTree();
      expect(ktree.toArray([])).toBeNull();
    });
  });
});
