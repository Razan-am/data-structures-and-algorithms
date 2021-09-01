'use strict';

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

describe("Binary Search Tree Tests ", () => {
    it("1.Can successfully instantiate an empty tree", () => {
      let binarySearchTree = new BSTree();
      expect(binarySearchTree.root).toBe(null);
    });
  
    // it("2.Can successfully using add method to add one root value", () => {
    //   let binarySearchTree = new BSTree();
    //   binarySearchTree.add(50);
    //   expect(binarySearchTree.root.value).toBe(50);
    // });
  
    // it("3.Can successfully add multiple nodes using add method", () => {
    //   let binarySearchTree = new BSTree();
    //   binarySearchTree.add("50");
    //   binarySearchTree.add("35");
    //   binarySearchTree.add("65");
  
    //   expect(binarySearchTree.root.value).toBe("50");
    //   expect(binarySearchTree.root.left.value).toBe("35");
    //   expect(binarySearchTree.root.right.value).toBe("65");
    //   expect(binarySearchTree.root.left.left).toBe(null);
    //   expect(binarySearchTree.root.left.right).toBe(null);
    //   expect(binarySearchTree.root.right.left).toBe(null);
    //   expect(binarySearchTree.root.right.right).toBe(null);
    // });
  });

