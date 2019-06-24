// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 4.3") + '\n');
/*
============================================
; Title: Filtering
; Author: Keith Kozma
; Date:   23 June 2019
; Description: This is a program which uses a for loop to iterate through a string array and the getValue function to
; select specific elements from inside the array.
============================================
*/
// Declaring the string array with 5 elements
var vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];
// creating the function with a for loop to iterate through the array
function getValue(newArr, stringVal) {
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === stringVal) {
      console.log(newArr[i]);
    }
  }
}

// Creating the result of the array elements
console.log("-- DISPLAYING ARRAY ITEMS --");
for (let f = 0; f < vehicles.length; f++) {
  console.log(vehicles[f]);
  console.log("");
}

// Selecting the element
console.log("-- SELECTED VALUE --");

getValue(vehicles, "Motorcycle");
console.log("");

//  Selecting the element
console.log("-- SELECTED VALUE --");

getValue(vehicles, "Bus");
console.log("");
