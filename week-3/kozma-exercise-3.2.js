// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 3.2") + '\n')
/*
============================================
; Title:  Pattern Matching Functions
; Author: Keith Kozma
; Date:   21 June 2019
; Description: Using conditional statements to compare two variables.
============================================
*/

// 6 Variables
var test1 = "Truck";
var test2 = "Car";
var test3 = "Bike";
var test4 = "Bike";
var test5 = "Four";
var test6 = "Three";

//Function declarations

//function with conditional statement
 function match(arg1, arg2) {
  if (arg1 === arg2) {
    return true;
  }
  else {
    return false;
  }
 }

 // function that outputs a mismatch when comparing two variables
 function logMismatch(arg1, arg2) {
   console.log(arg1 + " and " + arg2 + " do not match!");

 }

 // function that outputs a match when comparing two variables
 function logMatch(arg1, arg2) {
  console.log(arg1 + " and " + arg2 + " are a match!");
}

//Testing and output of the match function
console.log(match("A", "B"));
console.log(match("2", "2"));

//Conditional statement comparing truck and car
if (match(test1, test2)) {
  logMatch(test1, test2);
}
else {
  logMismatch(test1, test2);
}

//Conditional statement comparing bike and bike
if (match(test3, test4)) {
  logMatch(test3, test4);
}
else {
  logMismatch(test3, test4);
}
//Conditional statement comparing four and three
if (match(test5, test6)) {
  logMatch(test5, test6);
}
else {
  logMismatch(test5, test6);
}

