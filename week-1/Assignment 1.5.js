/*
============================================
; Title: Assignment 1.5
; Author: Keith Kozma 
; Date:  June 4, 2019
; Modified By: N/A
; Description: This program holds 3 employees information and
outputs the result to the console.
;===========================================
*/

// Employee 1
var e1FirstName = "Betty";
var e1LastName = "Davis";
var e1Address = "3353 Simons Hollow Road";
var e1PayRate = 15.00;
var e1HireDate = new Date(2009,1, 2);

//Employee 2
var e2FirstName = "John";
var e2LastName = "Wilson";
var e2Address = "2848 Fowler Avenue";
var e2PayRate = 15.50;
var e2HireDate = new Date (2003, 3, 4);

// Employee 3
var e3FirstName = "Monica";
var e3LastName = "Croyle";
var e3Address = "1090 Harper Street";
var e3PayRate = 16.00;
var e3HireDate = new Date (2007, 5, 6);

// payRate set to one decimal place
var e1PayRate_1 = (e1PayRate.toFixed(1));
var e2PayRate_2 = (e2PayRate.toFixed(1));
var e3PayRate_3 = (e3PayRate.toFixed(1));

// Date formated to include slashes
var e1HireDate_1 = ((e1HireDate.getMonth() +1) + "/" + e1HireDate.getDate() + "/" + e1HireDate.getFullYear());
var e2HireDate_2 = ((e2HireDate.getMonth() +1) + "/" + e2HireDate.getDate() + "/" + e2HireDate.getFullYear());
var e3HireDate_3 = ((e3HireDate.getMonth() +1) + "/" + e3HireDate.getDate() + "/" + e3HireDate.getFullYear());

// Final product
console.log(e1FirstName + " " + e1LastName + " " + e1PayRate_1 + " " + e1HireDate_1);
console.log(e2FirstName + " " + e2LastName + " " + e2PayRate_2 + " " + e2HireDate_2);
console.log(e3FirstName + " " + e3LastName + " " + e3PayRate_3 + " " + e3HireDate_3);