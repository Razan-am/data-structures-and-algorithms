'use strict';

let array = [5,2,9,7,4];
let x = 0;

function insertShiftArray (array,x) {
    let middlePoint= Math.ceil(array.length/2);
    let newArray =[]; 
    for (let i=0; i < middlePoint; i++){
       newArray[i]=array[i];
    }
   for (let i=middlePoint; i < array.length; i++){
       newArray[i+1]=array[i];
    }
    newArray[middlePoint]=x;
    return newArray;
}
insertShiftArray (array,0)