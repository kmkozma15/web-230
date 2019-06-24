// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 4.2") + '\n');
/*
============================================
; Title: Arrays
; Author: Keith Kozma
; Date:   23 June 2019
; Description: This is a program which uses a for loop to iterate through a string array and output its contents.
============================================
*/
// Declaring the string array with 5 parameters
var fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];
// Declaring the function getFruit and a single parameter
function getFruit(newArr) {
  // iterates through the loop
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}
// Results from the getFruit function
getFruit(fruits);
