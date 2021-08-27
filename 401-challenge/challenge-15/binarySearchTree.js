'use strict';

const Node = require('./node');

class BSTree{
    constructor(root=null){
        this.root=root;
    }

    add(value){

        let newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }else{
            this.addNode(this.root,newNode)
        }
    }

    addNode(node,newNode){
        node = 0;
        if(newNode.value < node.value){
            if(node.left === null){

                node.left = newNode;
            }else{
                this.addNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                this.addNode(node.right, newNode);
            }
        }
    }

    contains(node){

        if(node === null){
            return true;
        }else{
            return false;
        }
    }
}

module.exports = BSTree;