'use strict';


let array = [1,2,3,4];

function reverseArray (array) {
      let newArr = []
      for(let i = 0; i<array.length; i++){
            newArr[i]=array[array.length-1-i];
       }
       return newArr;
}


reverseArray(array);