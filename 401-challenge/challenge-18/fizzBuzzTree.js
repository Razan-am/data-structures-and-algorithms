'use strict';

const BinaryTree = require('./binaryTree');
const Node = require('./Node');

function FizzBuzzTree(kTree){

    if (!kTree.root)
    return 'tree is empty';
    
    let result = [];

    const traverse = (node)=>{

        if(node.value %3 == 0){
            result.push(node.value = 'Fizz');

        }else if (node.value % 5 == 0 ){
            result.push(node.value = 'Buzz');


        }else if (node.value %3 == 0 && node.value % 5 == 0 ){
            result.push(node.value = 'FizzBuzz');

        }else{
            result.push(`${node.value}`) 
        }
        
        if (node.left) 
        traverse(node.left)

        if (node.right) 
        traverse(node.right)
      
    }
    traverse(kTree.root);
    return result;
}


module.exports = FizzBuzzTree;