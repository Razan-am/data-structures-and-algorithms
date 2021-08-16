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

    kthFromEnd(k){
        
        let newNode =  new Node(k);
        let currentNode = this.head;
        let length = 0;
        if (currentNode == null ) {
            return null
        }

        while(currentNode !== null){
            currentNode = currentNode.next;
            length ++
        }
        if (length < k) {
            // let currentNode = this.head;
            return null ;
        }
        if (length >= k) {
            currentNode = this.head;
            for (let index = 0; index < length - k; index++) {
                currentNode = currentNode.next
            }
        }
        return currentNode
    }
}

module.exports=LinkedList;