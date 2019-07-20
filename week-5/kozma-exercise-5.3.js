// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Exercise 5.3") + '\n');

/*
============================================
; Title: Object Collections
; Author: Keith Kozma
; Date:   19 July 2019
; Description: This is a simple forEach loop method which iterates through all collection elements within the array and outputs the contents through the console.log.
============================================
*/

// Start Program
var famousComposers = [
  {
    LastName: 'Beethoven',
    Genre: 'Classical',
    Rating: '8'
  },
  {
    LastName: 'Mozart',
    Genre: 'Classical',
    Rating: '10'
  },
  {
    LastName: 'Bach',
    Genre: 'Classical',
    Rating: '9'
  },
  {
    LastName: 'Haydn',
    Genre: 'Classical',
    Rating: '6'
  },
  {
    LastName: 'Schubert',
    Genre: 'Classical',
    Rating: '5'
  },
];
console.log("-- Composers --");

famousComposers.forEach(function(composers) {
  console.log(
    "Last Name: " + composers.LastName + ", Genre: " + composers.Genre + ", Rating: " + composers.Rating
  );

});
