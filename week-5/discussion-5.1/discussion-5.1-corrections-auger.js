/*
============================================
; Title:  aauger-discussion-board-5.1.js
; Author: April Auger
; Modified by: Keith Kozma (Corrected Errors)
; Date:   19 June 2019
; Description: A simple program to demonstrate
;			   how to use the map function to
;			   output an array's values and index.
;			   There are three errors in the code.
;===========================================
*/

// // Load additional JavaScript file
// var header = require("../header.js");

// Output Header Display
// console.log(header.display("April", "Auger", "Discussion Board 5.1") + "\n");

// Start program

// Restaurants array
var restaurants = [ // Changed the brace to a bracket. When accessing elements of an array, brackets are used instead of braces.
  'La Grande Orange Cafe',
    'The Front Yard',
    'Angelini Osteria',
    'Pampas Grill',
    'Providence'
];


// Map function creates a new array that will return
// the values and keys for each element in the array
var list = restaurants.map(function(currentValue, i){ // Original index was changed to "i" and removed the two "+" at the end. In addition, I removed "employees" because
// the code was not efficiently being utilized.
	return currentValue + ' (' + i + ')';
});

// Output the new array values and keys
list.forEach(function(e) {
 	console.log(e);
});

// End program
