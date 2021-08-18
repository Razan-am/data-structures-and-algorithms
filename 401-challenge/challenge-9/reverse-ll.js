'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head=null;
    }

    insert(value){
        let newNode =  new Node(value);
        if (!this.head) {
            this.head=newNode;
        }else{
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode=currentNode.next;
            }
            currentNode.next=newNode;
        }
    }
    
    append(value){
        let newNode =  new Node(value);
        if (!this.head) {
            this.head=newNode;
        }else{
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode=currentNode.next;
            }
            currentNode.next=newNode;
        }
    }

    reversList(newlist){
        let newnode = newlist;
        let previous =null;
        let currentNode = this.head;

        if (currentNode == null ) {
            return null
        }

        while(newnode !== null){
            let saveNode = newnode.next;
            newnode.next = previous;
            previous = newnode;
            newnode=saveNode
        }
        return previous;
    }
}

module.exports=LinkedList;