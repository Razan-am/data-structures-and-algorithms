'use strict';

const Queue =require('../queue');

describe('Queue test',()=>{

    it('Can successfully enqueue into a queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(2);
        expect(newQueue.front.value).toEqual(2);
    })

    it('Can successfully enqueue multiple values into a queue',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(3);
        newQueue.enqueue(4);
        expect(newQueue.front.value).toEqual(3);
        expect(newQueue.front.next.value).toEqual(4);
    })

    it('Can successfully dequeue out of a queue the expected value',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(3);
        newQueue.enqueue(4);
        newQueue.dequeue();
        expect(newQueue.front.value).toEqual(4);
    })
   
    it('Can successfully peek into a queue, seeing the expected value',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(3);
        newQueue.enqueue(4);
        newQueue.peek();
        expect(newQueue.front.value).toEqual(3);
    })
    
    it('Can successfully empty a queue after multiple dequeues',()=>{
        let newQueue = new Queue();
        newQueue.enqueue(3);
        newQueue.enqueue(4);
        newQueue.dequeue();
        newQueue.dequeue();
        expect(newQueue.front).toEqual(null);
    })

    it('Can successfully instantiate an empty queue',()=>{
        let newQueue = new Queue();
        expect(newQueue.front).toEqual(null);
    })

    it('Calling dequeue or peek on empty queue raises exception',()=>{
        let newQueue = new Queue();
        expect(newQueue.dequeue()).toEqual('it is empty');
        expect(newQueue.peek()).toEqual('it is empty');
    })
})