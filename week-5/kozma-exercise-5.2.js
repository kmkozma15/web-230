// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Exercise 5.2") + '\n');

/*
============================================
; Title: Built-In Functions
; Author: Keith Kozma
; Date:   19 July 2019
; Description: This is a simple forEach loop method which iterates through all elements within the array and outputs the contents through the console.log.
============================================
*/

// Start Program
var foods = [
  "Orange chicken",
  "Steak",
  "Turkey Sandwich",
  "Avacado",
  "Rice"
];

foods.forEach(function(food) {
  console.log(food);
});
// End Program
