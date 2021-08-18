'use strict';

const LinkedList= require('../ linked-list-zip');

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

    it('zipList',()=>{

        let newList = new LinkedList();

        let ll1 = new LinkedList();
        ll1.append(1);
        ll1.append(3);
        ll1.append(5);
        
        let ll2 = new LinkedList();
        ll2.append(2);
        ll2.append(4);
        ll2.append(6);
        
        expect(newList.head.zipList(ll1,ll2).toString()).toEqual( "{1}->{2}->{3}->{4}->{5}->{6}")
    })

})