// Header file output
var header = require("../kozma-header.js")
console.log(header.display("Keith" , "Kozma", "Exercise 3.3") + '\n')
/*
============================================
; Title:  Control Statements
; Author: Keith Kozma
; Date:   21 June 2019
; Description: Using a switch statement to replace an existing if...else statement and
; produce the output: "The enter key was pressed".
============================================
*/

//Variable declaration
let eventKeyCode = 13

//Switch block replaced conditional 1f...else statement
switch (eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;

  case 16:
      console.log('The shift key was pressed.');
  break;

  case 32:
      console.log('The spacebar key was pressed.');
  break;

  case 8:
      console.log('The backspace / delete key was pressed.');
  break;

  default:
      console.log('Unrecognized key.');
    break;
}
