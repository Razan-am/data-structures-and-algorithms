'use strict';

const Node = require('./node');

class Stack{
    constructor(){
        this.top = null;
    }

    push(value){
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop(){
        if(this.top === null ){
            return 'it is empty';
        }
        let currentNode = this.top;
        let popNode = this.top.value;
        return popNode;
    }

    peek(){

        if(this.top === null ){
            return 'it is empty';
        }
        return this.top.value;
    }

    isEmpty(){
        if(this.top){
            return false;
        }else{
            return true;
        }
    }
}

module.exports = Stack;