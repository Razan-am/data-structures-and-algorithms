'use strict';

const LinkedList= require('../reverse-ll.js');

describe('linked list module',()=>{

    it('constructor()',()=>{
        let newList = new LinkedList();
        expect(newList.head).toEqual(null);
    })

    it('append',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })

    // it('revers list',()=>{
    //     let newList = new LinkedList();
    //     newList.insert(1);
    //     newList.append(2);
    //     newList.append(3);
    //     newList.append(4);
    //     expect(newList.reversList(newList).toString()).toEqual( "{4}->{3}->{2}->{1}")
    // })

})