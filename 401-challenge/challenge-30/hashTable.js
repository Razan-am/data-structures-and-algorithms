'use strict';

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    append(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}

class HashTable{
    constructor(size = 70){
        this.size = size;
        this.map = new Array(size);
    }
    hash(key){
        return key.split('').reduce((acc,char)=>{
            return acc + char.charCodeAt(0);
        },0) * 599 % this.size;
    }
    // add data
    add(key, value) {
        let hash = this.hash(key);
        if (!this.map[hash]) {
            this.map[hash] = new LinkedList();
        }
        let entry = { [key] : value}
        this.map[hash].append(entry);
    }
    // Search data
    get(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
          return this.map[hash];
        } else {
          return null;
        }
    }
    contains(key) {
        let hash = this.hash(key);
        if (this.map[hash]) {
          return true;
        }
        return false;
    }
}

module.exports = {
    Node,
    LinkedList,
    HashTable};