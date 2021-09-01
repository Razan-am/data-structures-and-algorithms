'use strict';

const binaryTree = require('./bT');

const Node = require('./node');

function oddNumber (tree) {

    if(!tree){
        console.log('tree is empty')
    }
     
    let sum = 0;

    function sumTheOddNum(num){
        
        if(num.value %2 == 1){
            sum += num.value;
        }
        if(num.left){
                sumTheOddNum(num.left)
        }
        if(num.right){
                sumTheOddNum(num.right)
            }
        sumTheOddNum(tree.root);
        return sum
    }
    
}

let tree = null;


let eight = new Node(8);
let three = new Node(3);
let one = new Node(1);
let six = new Node(6);
let four = new Node(4);
let seven = new Node(7);
let ten = new Node(10);
let fourteen = new Node(14);
let therteen = new Node(13);


eight.left= three;
eight.right = ten;
three.left = one;
three.right= six;
six.left= four;
six.right = seven;
ten.right=fourteen;
fourteen.left=therteen;

tree = new binaryTree(eight);

console.log('sum',oddNumber(tree));

module.exports = oddNumber