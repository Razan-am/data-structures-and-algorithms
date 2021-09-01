'use strict';

const Node = require('./node');

class BreadthTree{

    constructor(root = null){
        this.root = root
    }

    breadthFirst(tree) {
        if (!this.root) {
          return "the tree is empty";
        }
        let node = [tree];
        let order = [];
        while (node.length > 0) {
          let current = node.shift();
          let value = current.value;
          order.push(value);

          if (current.left != null) {
            node.push(current.left);
          }
    
          if (current.right != null) {
            node.push(current.right);
          }
        }
        return order;
      }
}


module.exports = BreadthTree;