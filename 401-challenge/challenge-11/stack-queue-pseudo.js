'use strict';

const Stack = require('./stack');

class PseudoQueue{
    constructor(){
        this.s1=new Stack(),
        this.s2=new Stack()
    }

    enqueue(value){
        this.s1.push(value);
    }

    dequeue(){
        if(this.s2.length == 0){
            while (this.s1.length != 0) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2.pop()
    }
}

module.exports= PseudoQueue