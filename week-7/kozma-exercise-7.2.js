// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Exercise 7.3") + '\n');

/*
============================================
; Title: Constructor Functions
; Author: Keith Kozma
; Date: 19 July 2019
; Description: This is a program that uses constructor object to assign elements to an employee list.
============================================
*/

// start program

// function declaration
function employee(num, firstName, lastName, title){
  this.num = num;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
// variable declaration and employee array
var employeeList = [
  new employee(1, 'Thomas', 'Edison', 'Software Engineer'),
  new employee(2, 'Benjamin', 'Franklin', 'Programmer'),
  new employee(3, 'Nokola', 'Tesla', 'Project Manager'),
  new employee(4, 'Charles', 'Babbage', 'Product Manager'),
  new employee(5, 'Alexander', 'Bell', 'Business Analyst')
];

// for loop and console output
var index = 0;
for (let i = 0; i < employeeList.length; i++) {
  console.log(employeeList[i].num, employeeList[i].firstName, employeeList[i].lastName, employeeList[i].title);
  ;

}

// end program
