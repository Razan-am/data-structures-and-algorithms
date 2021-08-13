'use strict';

1.
function fib(n) {
  if (n === 0 || n === 1 ){
       return n
   } 
  else return fib(n - 1) + fib(n - 2)
}
fib(7) 
console.log(fib(7));

// -----------------------------------------------------
2.
function fib(n) {
  f=[0,1]
  let arr= [];
  
  for(let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]; 
    arr.push(f[i]);
  }
  
  return arr;
}
fib(9)
console.log(fib(9));