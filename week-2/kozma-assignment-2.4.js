/*
============================================
; Title:  kozma-assignment-2.4.js
; Author: Keith Kozma
; Date:   13 June 2019
; Modified by: Keith Kozma
; Description: This program displays a simple statement using functions, strings, and integers.
;===========================================
*/
// Header Output
var header = require("../kozma-header.js");
console.log(header.display("Keith" , "Kozma", "Assignment 2.4") + '\n');

// Function for first and last name

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

// Function for date writer

function dateWriter(year, month, day) {
 var today;
 today = new Date(year + "/" + month + "/" + day);
 return today.toLocaleDateString();
}

// Function for format_number

function formatNumber(number, fixed) {
  return number.toFixed(fixed);
}

// Function for convert to integer

function convertToInt(stringInt) {
  return parseInt(stringInt);
}

//  Function for convert to float

function convertToFloat(stringFloat) {
  return parseFloat(stringFloat);
}

// console.log output

console.log("Hello my name is " + fullName("Keith", "Kozma") + "!\n");
console.log("Today's date is " + dateWriter(2019, 06, 13) + " and the current temperature is " + formatNumber(105, 1) +
 "," + '\n' + "I am " + convertToInt("25") + " years old, and my savings account goal is " + convertToFloat("5000000.00") + " dollars.");
