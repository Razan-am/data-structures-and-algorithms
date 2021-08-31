'use strict';

const Node = require('./Node');

class FizzBuzz{
    constructor(root= null){
        this.root = root;
    }

}
function FizzBuzzTree(kTree){

    let result = [];
    if(kTree % 3 === 0 && kTree % 5 === 0){
        result.push('FizzBuzz')
    }else if(kTree % 3 === 0){
        result.push('Fizz');
    }else if(kTree % 5 === 0){
        result.push('Buzz');
    }else{
        result.push(kTree.toString());
    }
    return result;

}


module.exports = {FizzBuzz,FizzBuzzTree}