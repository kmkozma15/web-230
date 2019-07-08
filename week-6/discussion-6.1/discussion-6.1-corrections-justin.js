/*
============================================
; Title: Assignment 6.1
; Author: Justin Singleton
; Modified by: Keith Kozma
; Date: 7 July 2019
; Description: This program demonstrates the
; use of object properties, but has two
; intentional mistakes that have been fixed.
;===========================================
*/

// const header = require('./singleton-header.js');

// console.log(header.display("Justin", "Singleton", "Assignment 6.1"));
// object person with its properties
var person = {
  firstName: 'Justin',
  lastName: 'Singleton',
  gender: 'male', // Added a comma to show separation between elements within your object
  birthday: 'date',
  eyeColor: 'brown'
};
// print initial properties
console.log(person.firstName, person.lastName, person.birthday, person.eyeColor);
// delete wrong properties
delete person.birthday;
delete person.eyeColor;
// show what deleted properties look like
console.log(person.firstName, person.lastName, person.birthday, person.eyeColor);
// add correct properties
person.birthday = "02 October 1995";
person.eyeColor = "Green";
// print statement with correct properties
console.log(person.firstName, person.lastName + " was born on " + person.birthday + // Added a + between born on " and person.birthday to show the element being added to the console.log statement.
" and his eye color is " + person.eyeColor);

/*
--- EXPECTED OUTPUT ---
Justin Singleton date brown
Justin Singleton undefined undefined
Justin Singleton was born on 02 October 1995 and his eye color is Green
-----------------------
*/
