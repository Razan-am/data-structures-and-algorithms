'use strict';

const PseudoQueue = require('../stack-queue-pseudo');

describe('PseudoQueue',()=>{
    it('Happy Path - Expected enqueue',()=>{
        let pesudo = new PseudoQueue();
        let value = 5;
        pesudo.enqueue(3);
        pesudo.enqueue(4);
        pesudo.enqueue(7);
        expect(pesudo.s2.top).toEqual(null);
    })

    it('Happy Path - Expected dequeue',()=>{

        let pesudo = new PseudoQueue();
        pesudo.enqueue(3);
        pesudo.enqueue(4);
        pesudo.enqueue(7);
        expect(pesudo.dequeue()).toEqual("it is empty");
    })

})