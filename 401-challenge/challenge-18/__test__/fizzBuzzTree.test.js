'use strict';

const {FizzBuzz,FizzBuzzTree} = require('../fizzBuzzTree');
const Node = require('../Node');

let tree = null;

describe('Fizz Buzz Tree',()=>{

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
        tree = new FizzBuzz(one);
    });

    
    it('constructor', ()=>{
        const newTree = new FizzBuzz();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
    });

    it('having left and right', ()=>{
        const newTree = new FizzBuzz();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(1);
        expect(tree.root.left.value).toEqual(2);
        expect(tree.root.right.value).toEqual(3);
    });
    
    it('FizzBuzzTree',()=>{
        let one = new Node(1);
        let two = new Node(2);
        let three = new Node(3);
        let four = new Node(4);
        let five = new Node(5);
        let seven = new Node(10);
        let eight = new Node(15);
        let nine = new Node(12);

        one.left = two;
        one.right = three;
        three.right = four;
        three.left = seven;
        two.left = five;
        two.right = eight;
        eight.right = nine;
        // create a tree and pass root to it
        tree = new FizzBuzz(one);

        let expectedOutput=[1,2,'Fizz',4,'Buzz','Buzz','FizzBuzz','Fizz']
        expect(FizzBuzzTree(tree)).toEqual(expectedOutput);
    })
})