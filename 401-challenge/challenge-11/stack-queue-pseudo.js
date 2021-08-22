'use strict';

const Node = require('./node');

class PseudoQueue{
    constructor(){
        this.s1=[],
        this.s2=[]
    }

    enqueue(value){
        while(this.s1.length != 0){
            this.s2.push(this.s1.pop());
        }
        this.s1.push(value);

        while (this.s2.length != 0) {
            this.s1.push(this.s2.pop())
        }
    }

    dequeue(){
        if(this.s1.length == 0){
            console.log('It is empty');
        }
        let x = this.s1[this.s1.length - 1];
        this.s1.pop();
        return x;
    }
}

module.exports= PseudoQueue