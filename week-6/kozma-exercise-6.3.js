// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Exercise 6.3") + '\n');

/*
============================================
; Title: Object Literals
; Author: Keith Kozma
; Date: 19 July 2019
; Description: This is a program that outputs a trouble ticket by using the get/set methods.
============================================
*/

var ticket = {
  id: 101,
  name: 'Help Desk Support',
  requestor: 'Bob Jones',

  get troubleTicket(){
    return "id: " + this.id + ", " + "name: " + this.name + ", " + "requestor: " + this.requestor + ", ";
  },

  set troubleTicket(val) {
    this.ticket = val;
  }
}

console.log(ticket.troubleTicket);
