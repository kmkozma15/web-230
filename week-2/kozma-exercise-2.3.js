/*
============================================
; Title:  kozma-exercise-2.3.js
; Author: Keith Kozma
; Date:   13 June 2019
; Description: This program
;===========================================
*/

/*
  Expected output: "Hello Keith Kozma!""
  FirstName LastName
  Exercise 2.3
  Today's Date
  Hello FirstName LastName!
  Hint: Use your personal header display function and
  refer to page 178 for implementing function properties
*/

// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Week 2") + '\n')

// Function properties
myName.keith = "Keith";
lastName.kozma = "Kozma";

// Main function
function myName() {
  return myName.keith;
}
function lastName() {
  return lastName.kozma;
}

// console.log output
console.log("Hello " + myName() + " " + lastName() + "!");
