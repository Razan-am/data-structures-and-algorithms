'use strict';

const Node = require('./node');

class BSTree{
    constructor(root=null){
        this.root=root;
    }

    add(value){

        if(this.left){
            if(value < this.root){
                this.left.add(value);
            }else{
                this.left = new Node(value);
            }
        }else{
            if(value > this.root){
                this.right.add(value);
            }else{
                this.right = new Node(value);
            }
        }
    }

    contains(value){

        if(this.root === value){
            return this;
        }
        if(value < this.root && this.left){
            return this.left.contains(value);
        }else if(value > this.root && this.right){
            return this.right.contains(value);
        }else{
            return null;
        }
    }
}

module.exports = BSTree;