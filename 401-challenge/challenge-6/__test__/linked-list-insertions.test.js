'use strict';

const LinkedList= require('../linkedlist');

describe('linked list module',()=>{

    it('Can successfully add a node to the end of the linked list',()=>{
        let newList = new LinkedList();
        expect(newList.head).toEqual(null);
    })

    it('Can successfully add multiple nodes to the end of a linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })

    it('Can successfully insert a node before a node located i the middle of a linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        let middleValue = 'middle value';
        let lastlValue = 'last value';
        newList.insert(initialValue);
        newList.append(middleValue,lastlValue);
        newList.insertBefore(middleValue,lastlValue);
        expect(newList.head.value).toEqual(initialValue);
        expect(newList.head.next.next.value).toEqual(lastlValue);
    })

    it('Can successfully insert a node before the first node of a linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        let middleValue = 'middle value';
        let lastlValue = 'last value';
        newList.insert(initialValue);
        newList.append(middleValue,lastlValue);
        newList.insertBefore(middleValue,lastlValue);
        expect(newList.head.value).toEqual(initialValue);
        expect(newList.head.next.value).toEqual(middleValue);
    })

    it('Can successfully insert after a node in the middle of the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        let middleValue = 'middle value';
        let lastlValue = 'last value';
        newList.insert(initialValue);
        newList.append(middleValue,lastlValue);
        newList.insertAfter(middleValue,lastlValue);
        expect(newList.head.value).toEqual(initialValue);
        expect(newList.head.next.value).toEqual(middleValue);
    })
    it('Can successfully insert a node after the last node of the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        let middleValue = 'middle value';
        let lastlValue = 'last value';
        newList.insert(initialValue);
        newList.append(middleValue,lastlValue);
        newList.insertAfter(middleValue,lastlValue);
        expect(newList.head.value).toEqual(initialValue);
        expect(newList.head.next.next.value).toEqual(lastlValue);
    })
})