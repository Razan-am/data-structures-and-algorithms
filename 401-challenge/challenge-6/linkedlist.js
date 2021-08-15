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

    insertBefore(value,newValue){
        let currentNode= this.head;
        let newNode = new Node (newValue);
        while (currentNode !== null) {
            if (currentNode.value == value) {
               newNode.next=currentNode.next;
               currentNode.next=newNode;
            }
            currentNode =currentNode.next;
        }
    }
      insertAfter(value,newValue){
        let currentNode= this.head;
        let newNode = new Node (newValue);
        while (currentNode !== null) {
            if (currentNode.value == value) {
               newNode.next=currentNode.next;
               currentNode.next=newNode;
            }
            currentNode =currentNode.next;
        }
    }
}

module.exports=LinkedList;