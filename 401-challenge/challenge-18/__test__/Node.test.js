'use strict';

const Node = require('../Node')

describe('Node module',()=>{
    it('constructor()',()=>{
        let value = 'my node value';
        let newNode = new Node(value);
        expect(newNode.value).toEqual(value);
    })
})