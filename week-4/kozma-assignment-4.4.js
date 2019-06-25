// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Assignment 4.4") + '\n');
/*
============================================
; Title: Predicates
; Author: Keith Kozma
; Date:   24 June 2019
; Description: This program utilizes a 5 element array. Within the array the original array will be displayed,
; the array will be sorted and displayed and finally a single element will be selected and outputted.
============================================
*/

// start program

// Declaring the 5 element array
var states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// function
function getValue(newArr, stateDisplay) {
  var filteredState = newArr.filter(function(el){
    return stateDisplay === el;
})
console.log((filteredState[0]));
}


// Output

console.log("-- ORIGINAL ARRAY --");
for (let f = 0; f < states.length; f++) {
  console.log(states[f]);
}
//  Break
console.log("");

console.log("-- SORTED ARRAY --");
for (let s = 0; s < states.length; s++) {
  states.sort();
  console.log(states[s]);
}

// Break
console.log("");

console.log("-- SELECTED VALUE --");

getValue(states, "Iowa");

// end program
