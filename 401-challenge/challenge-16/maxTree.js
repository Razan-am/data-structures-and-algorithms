'use strict';

const Node = require('./node');

class BinaryTree{
    constructor(root = null){
        this.root = root;
    }

    
    add(value){

        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
            return
        }else{
            while (this.root !== null) {
                if(this.root.value > value){
                    if(this.root.left === null){
                        this.root.left = newNode;
                        return
                    }
                    this.root = this.root.left
                }else{
                    if(this.root.right === null){
                        this.root.right = newNode;
                        return;
                    }
                    this.root = this.root.right;
                }
            }
        }
    }

    maxValue(){

        if(this.root === null){
            console.log('tree is empty');
        }else{
            let max;
            let leftMax;
            let RightMax;

            if (this.root.left != null) {
                leftMax = this.maxValue(this.root.left);
                max = Math.max(max,leftMax)
            }

            if (this.root.right != null) {
                RightMax = this.maxValue(this.root.right);
                max = Math.max(max , RightMax);
            }

            return max;
        }
    }
}
module.exports = BinaryTree;