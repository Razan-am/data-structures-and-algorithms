'use strict';

const Node = require('./node');

class Queue{

    constructor(){
        this.front = null;
        this.back = null;
    }

    enqueue(value){
        
        let newNode = new Node(value);

        if(this.front === null){
            this.back = newNode;
            this.front = this.back;
        }else{
            this.back.next = newNode;
            this.back = newNode;
        }
    }

    dequeue(){

        if(this.front === null ){
            return 'it is empty';
        }
        let dNode = this.front;
        this.front = this.front.next;
        return dNode.value;
    }

    peek(){

        if(this.front === null ){
            return 'it is empty';
        }
        return this.front.value;
    }

    isEmpty(){
        if(this.top){
            return false;
        }else{
            return true;
        }
    }
}

module.exports=Queue;