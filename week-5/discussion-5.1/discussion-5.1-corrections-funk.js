/*
=================================================================
; Title:  Assignment 5.1 reduce() example with two errors
; Author: MDN Web Docs
; Modified by: Karie Funk
; Modified by: Keith Kozma (Correcting Errors)
; Date:   30 June 2019
; Description: Creating an reduce method in an array.
;================================================================
*/



// //HEADER
// var header = require('./Funk-header.js');

// console.log(header.display("Karie", "Funk", "Exercise 4.4"));

console.log("");

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer)); // Corrected typo and replaced "array" with "array1".
// expected output: 10

// 2 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // Added an extra parentheses before the semi-colon because of error given when running debugger. In addition to this,
// I have changed the second element from a 2 to 5. This was done to output the desired result of 15.
// expected output: 15
