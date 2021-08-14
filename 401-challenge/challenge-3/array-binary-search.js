'use strict';

let array = [5,7,2,8,4];
let x = 2;

function BinarySearch (array,x) {
     let first = 0;
     let last = array.length - 1;
     while(first <= last){
          let middle = Math.floor((first+last)/2);
          if(array[middle] === x){
                return x;
          }else if(array[middle] < x){ 
                  return first = middle + 1;
           }else{
                  return last = middle - 1;
           }
      }
     return -1;
}
BinarySearch (array,2)


