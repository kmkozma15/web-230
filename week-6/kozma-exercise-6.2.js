// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Exercise 6.2") + '\n');

/*
============================================
; Title: Exception Handling
; Author: Keith Kozma
; Date: 19 July 2019
; Description: This is a program that used to test a block of code using the try, catch, and finally methods.
============================================
*/
try {
  var a = 5;
  var b = 10;
  var diff = b - a;

  if (diff != 1) throw " Subtracted values do not equal 1"; {
    console.log(diff);

  }
} catch (error) {
  console.log("Catch clause:" + error);
}
finally {
  console.log("Finally clause: End of program...");

}
