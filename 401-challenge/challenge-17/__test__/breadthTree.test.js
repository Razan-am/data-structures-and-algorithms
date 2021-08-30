'use strict';

const BreadthTree = require('../breadthTree');
const Node = require('../node');

let tree = null;

describe('Bredth Tree',()=>{
    
    beforeAll(()=> {
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);

        one.left = two;
        one.right = three;
        two.left = five;
        three.right = four;
        // create a tree and pass root to it
        tree = new BreadthTree(one);
    });

    
    it('constructor', ()=>{
        const newTree = new BreadthTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('having left and right', ()=>{
        const newTree = new BreadthTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
        expect(tree.root.left.value).toEqual(2);
        expect(tree.root.right.value).toEqual(3);
    });
    
    it('BreadthFirst',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);

        one.left = two;
        one.right = three;
        three.right = four;
        two.left = five;
        // create a tree and pass root to it
        tree = new BreadthTree(one);

        let expectedOutput=[1,2,3,5,4]
        expect(tree.breadthFirst(one)).toEqual(expectedOutput);
    })

})