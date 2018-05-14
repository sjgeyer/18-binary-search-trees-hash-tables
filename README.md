# Documentation
# Lab 18 - Binary Tree Tree and K-ary Tree

**Author** Sarah Geyer & Wyatt Pefley

**Version** 1.0.0
## Overview
In our application we created methods that do various things on Binary Search and K-ary trees.
- .remove(value) 
  - traverses the tree until it finds a node with the specified value, and then removes the node.
- .toString()
   - traverses tree and returns all node values in a comma separated string.
- toArray(array) 
  - traverses the tree depth-first and returns all node values in an array.
## Data Structures
Binary Search Tree
K-Ary Tree 

### Testing
In order to test our application.
Fork Sarah's repo and clone it to your local machine.
Run the `npm i` command.
Run the `npm run test` command.
### Installation
In order to test our application.
Fork Sarah's repo and clone it to your local machine.
Run the `npm i` command.
## Big O
## #Binary Search Class
remove(node) method
  - time: O(log(n)) 
  - space: O(H) where height is equal to the height of the tree.

### K-ary Tree Class
find(value)
  - time: O(n^2) 
  - space: O(H) where H is equal to the height of the tree.
 
toString()
  - time: O(n^2)
  - space: O(H) where H is equal to the height of the tree.
 
toArray(array) 
  - time: O(n^2)
  - space: O(H) where H is equal to the height of the tree.
 
