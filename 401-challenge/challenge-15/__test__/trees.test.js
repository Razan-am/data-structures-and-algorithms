'use strict';

const { expect } = require('@jest/globals');
const BinaryTree = require('../binaryTree');
const BSTree = require('../binarySearchTree');
const Node = require('../node');
let tree = null;

describe('Binary Tree', ()=>{

    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let six = new Node(6);
        let seven = new Node(7);
        let eight = new Node(8);
        let nine = new Node(9);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        seven.left = eight;
        seven.right = nine;
        three.left = four;
        three.right = five;

        // create a tree and pass root to it
        tree = new BinaryTree(one);
    });

    it('constructor', ()=>{
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('preOrder', ()=> {
        let expectedOutput = [1,2,6,7,8,9,3,4,5];
        let preOrder = tree.preOrder();
        console.log("preOrder output ---->", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', ()=> {
        let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
        let inOrder = tree.inOrder();
        console.log("inOrder output ---->", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', ()=> {
        let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
        let postOrder = tree.postOrder();
        console.log("postOrder output ---->", postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });

});

/////////////////////////////////////////////////////////////////////////

describe('Binary Search Tree', ()=>{

    beforeAll(()=> {
        let one = new Node(15);
        let two = new Node(10);
        let three = new Node(25);
        let four = new Node(22);
        let five = new Node(27);
        let six = new Node(7);
        let seven = new Node(9);
        let eight = new Node(5);

        one.left = two;
        one.right = three;
        two.left = six;
        six.right = seven;
        six.left = eight;
        three.left = four;
        three.right = five;

        // create a tree and pass root to it
        tree = new BSTree(one);
    });

    it('constructor', ()=>{
        const newTree = new BSTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(15);
    });

    it('add', ()=>{
        const newTree = new BSTree();
        newTree.add(22)
        newTree.add(27)
        newTree.add(7)
        expect(newTree.root.value).toEqual(22);
        // expect(newTree.root.left.left.value).toEqual(7);
        // expect(newTree.root.rigth.right.value).toEqual(27);
        // expect(newTree.root.rigth.left.value).toEqual(22);
        
    });

    it('contains', ()=>{
        const newTree = new BSTree();
        expect(newTree.contains(20)).toEqual(false);
    });

    // it('preOrder', ()=> {
    //     let expectedOutput = [1,2,6,7,8,9,3,4,5];
    //     let preOrder = tree.preOrder();
    //     console.log("preOrder output ---->", preOrder);
    //     expect(preOrder).toEqual(expectedOutput);
    // });

    // it('inOrder', ()=> {
    //     let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    //     let inOrder = tree.inOrder();
    //     console.log("inOrder output ---->", inOrder);
    //     expect(inOrder).toEqual(expectedOutput);
    // });

    // it('postOrder', ()=> {
    //     let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    //     let postOrder = tree.postOrder();
    //     console.log("postOrder output ---->", postOrder);
    //     expect(postOrder).toEqual(expectedOutput);
    // });

});