'use strict';

const Node = require('./node');

class BinaryTree{
    constructor(root = null){
        this.root = root;
    }

    maxValue(){

        if(this.root === null){
            console.log('tree is empty');
        }

        let max =this.root.value;
        let maxNumber = (node) =>{
            if(node.left){
                maxNumber(node.left);
            }
            if (node.right) {
                maxNumber(node.right);
            }
            if (node.value > max) {
                max = node.value;
            }
        }
        maxNumber(this.root);
        return max;
    }
}
module.exports = BinaryTree;