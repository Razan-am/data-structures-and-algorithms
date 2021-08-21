'use strict';

const LinkedList= require('../ll-kth');

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

    // it('Where k is greater than the length of the linked list',()=>{
    //     let newList = new LinkedList();
    //     newList.insert(1);
    //     newList.insert(2);
    //     newList.insert(3);
    //     newList.insert(4);
    //     newList.insert(5);
    //     newList.kthFromEnd(11);
    //     expect(newList.head.value).toEqual(5);
    //     expect(newList.head.next.next.value).toEqual(11);
    // })

    // it('Where k and the length of the list are the same',()=>{
    //     let newList = new LinkedList();
    //     let initialValue = 'first value';
    //     newList.append(initialValue);
    //     expect(newList.head.value).toEqual(initialValue);
    // })

    // it('Where k is not a positive integer',()=>{
    //     let newList = new LinkedList();
    //     let initialValue = 'first value';
    //     let middleValue = 'middle value';
    //     let lastlValue = 'last value';
    //     newList.insert(initialValue);
    //     newList.append(middleValue,lastlValue);
    //     newList.insertBefore(middleValue,lastlValue);
    //     expect(newList.head.value).toEqual(initialValue);
    //     expect(newList.head.next.next.value).toEqual(lastlValue);
    // })

    // it('Where the linked list is of a size 1',()=>{
    //     let newList = new LinkedList();
    //     let initialValue = 'first value';
    //     let middleValue = 'middle value';
    //     let lastlValue = 'last value';
    //     newList.insert(initialValue);
    //     newList.append(middleValue,lastlValue);
    //     newList.insertBefore(middleValue,lastlValue);
    //     expect(newList.head.value).toEqual(initialValue);
    //     expect(newList.head.next.value).toEqual(middleValue);
    // })

    // it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    //     let newList = new LinkedList();
    //     let initialValue = 'first value';
    //     let middleValue = 'middle value';
    //     let lastlValue = 'last value';
    //     newList.insert(initialValue);
    //     newList.append(middleValue,lastlValue);
    //     newList.insertAfter(middleValue,lastlValue);
    //     expect(newList.head.value).toEqual(initialValue);
    //     expect(newList.head.next.value).toEqual(middleValue);
    // })
    
})