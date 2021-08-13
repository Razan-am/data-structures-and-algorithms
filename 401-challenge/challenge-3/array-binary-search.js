'use strict';

let array = [5,7,4];
let x = 7;

function BinarySearch (array,x) {
     for(let i =0; i<array.length; i++){
          if(array[i] === x){
                  return i;
          }else{
                  return -1;
          }
    }
}
BinarySearch (array,7)