// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 3.4") + '\n')
/*
============================================
; Title: Loops
; Author: Keith Kozma
; Date:   21 June 2019
; Description: This is a program that uses a for loop to create 10 random numbers
; and compares them to the global variable to determine whether they are a match or not.
============================================
*/

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1);
}

 //Variable declaration
 var int1 = 7;

 //Function with conditional statement
 function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  }
  else {
    return false;
  }
 }

 // Function that outputs a mismatch when comparing two variables
 function logMismatch(arg1, arg2) {
   console.log(arg1 + " and " + arg2 + " do not match!");

 }

 // Function that outputs a match when comparing two variables
 function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " are a match!");
}

// For loop which creates 10 iterations of a random number
for (let i = 0; i < 10; i++) {
  var locVar1 = randomNumber();

  // Conditional statement which checks if the var int1 is a match to the randomly generated locVar1
  if (match(int1, locVar1)) {
    logMatch(int1, locVar1);
  }
  else (
    logMismatch(int1, locVar1)
  )
}

