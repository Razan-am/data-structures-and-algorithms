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

    zipList(ll1,ll2){
        
        let newList = new LinkedList();

        let currentNode = this.head;
        let ll1_current=ll2;
        let ll2_current=ll1;


        if (currentNode == null ) {
            return null
        }

        while(ll1_current !== null && ll2_current !==null){
            ll1_next = ll1_current.next;
            ll2_next=ll2_current.next;

            ll2_next.next=ll1_next;
            ll1_next.next=ll2_next;

            ll1_current=ll1_next;
            ll2_current=ll2_next
        }
        ll2=ll2_current
    }
}

module.exports=LinkedList;