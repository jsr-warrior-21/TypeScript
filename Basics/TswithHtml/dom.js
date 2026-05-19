"use strict";
var elem = document.querySelector('h1');
console.log(elem?.textContent); // yaha prr question mark iss liye aaya kyuki kabhi kabhi value null bhi ho skti hai so usse bachne ke liye we use question mark
// there is another method if you didn't want to use question mark
// you can use exclametory sign at last --- means this tag definately will be present in my html file that never will be null
var elem1 = document.getElementsByTagName('a');
