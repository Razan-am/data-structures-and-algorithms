'use strict';

const Stack = require('../stack');

describe('Stack test',()=>{

    it('Can successfully push onto a stack',()=>{
        let newStack = new Stack;
        newStack.push(2);
        expect(newStack.top.value).toEqual(2);
    })

    it('Can successfully push multiple values onto a stack',()=>{
        let newStack = new Stack;
        newStack.push(3);
        newStack.push(4);
        expect(newStack.top.value).toEqual(4);
        expect(newStack.top.next.value).toEqual(3);
    })

    it('Can successfully pop off the stack',()=>{
        let newStack = new Stack;
        newStack.push(3);
        newStack.push(4);
        expect(newStack.pop()).toEqual(4);
    })
   
    it('Can successfully empty a stack after multiple pops',()=>{
        let newStack = new Stack;
        newStack.pop();
        expect(newStack.top).toEqual(null);
    })
    
    it('Can successfully peek the next item on the stack',()=>{
        let newStack = new Stack;
        newStack.push(3);
        newStack.push(4);
        newStack.peek();
        expect(newStack.top.value).toEqual(4);
    })

    it('Can successfully instantiate an empty stack',()=>{
        let newStack = new Stack;
        expect(newStack.top).toEqual(null);
    })

    it('Calling pop or peek on empty stack raises exception',()=>{
        let newStack = new Stack;
        expect(newStack.pop()).toEqual('it is empty');
        expect(newStack.peek()).toEqual('it is empty');
    })
})