![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 18: Binary Search Trees and Hash Tables
===

## Submission Instructions
* Read this document entirely and estimate how long this assignment will take.
* Work in a fork of this repository
* Work in a branch on your fork
* Protect your repository's `master` branch by activating `continuous-integration/travis-ci` status checks
* Create a pull request from your `lab` + `<your name>` branch to your `master` branch
* Open a pull request to this repository
* Submit on canvas a question and observation,your original estimate, how long you spent, and a link to your pull request


## Requirements
### Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any additional configuration or module files.
* **README.md** - contains documentation
* **.env** - contains env variables **(should be git ignored)**
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **.travis.yml** -
* **package.json** - contains npm package config
  * create a `test` script for running tests
  * create `dbon` and `dboff` scripts for managing the mongo daemon
* **index.js** - entry-point of the application
* **src/** - contains the remaining code
  * **src/lib/** - contains module definitions
  * **src/model/** - contains module definitions
  * **src/route/** - contains module definitions
  * **src/\_\_test\_\_/** - contains test modules
  * **main.js** - starts the server
	####  Documentation
  * in your README, write documentation for your data structures
  * your documentation should includes code block usage examples
  * provide instructions for:
    * installing and using your data structure
    * accessing each method
    * running your tests

### Feature Tasks
* Add a `remove(value)` method to the BinarySearchTree class presented in class.

* Implement a K-ary-Tree Class
  * implement the following prototype methods
    * `find(value)` should iterate over all child nodes using a breath-first traversal and return the first node that has that value, it should return null if a node with the value is not found
    * `toString(str)` should iterate over all child nodes using a breath-first traversal and concatenate their values separated by newlines in to a string
    * `toArray(array)` should use a depth-first traversal and push all the tree's elements into an array.

### Big O
  In the `readme.md` of your application, include the Big O complexity (time and space) for all the implemented methods.


## Testing
  * Write at least 2 unit tests (one normal cases and one edge case) for every implemented method.
  * Organize your tests into appropriate describe blocks for test output readability
