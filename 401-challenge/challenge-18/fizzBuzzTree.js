'use strict';

const Node = require('./Node');

class FizzBuzz{
    constructor(root= null){
        this.root = root;
    }

}
function FizzBuzzTree(kTree){

    for(let i = 1; i <= kTree; i++){
        result = [];
        if(i % 3 === 0 && i % 5 === 0){
          result.push('FizzBuzz')
        }else if(i % 3 === 0){
            result.push('Fizz');
        }else if(i % 5 === 0){
            result.push('Buzz');
        }else{
            result.push(i);
        }
        return result;
    }
    this.FizzBuzzTree(kTree.left);
    this.FizzBuzzTree(kTree.right)

}


module.exports = {FizzBuzz,FizzBuzzTree}