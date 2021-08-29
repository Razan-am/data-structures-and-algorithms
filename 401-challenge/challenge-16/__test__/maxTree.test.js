'use strict';

const BinaryTree = require('../maxTree');
const Node = require('../node');
let tree = null;

describe('find the max of binary tree',()=>{

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

    it('add',()=>{
        const newTree = new BinaryTree();
        newTree.add(10);
        newTree.add(2);
        newTree.add(17);
        expect(newTree.root.value).toEqual(10)
    })


    // it('find the max',()=>{
    //     const newTree = new BinaryTree();
    //     newTree.add(10);
    //     newTree.add(2);
    //     newTree.add(17);
    //     expect(newTree.maxValue(newTree)).toEqual(17)
    // })

    
    it('when the root is null',()=>{
        let max = 9;
        const newTree = new BinaryTree();
        expect(newTree.root).toEqual(null);
    })
})