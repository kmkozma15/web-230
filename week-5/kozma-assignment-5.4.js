// Header file output
var header = require("../kozma-header")
console.log(header.display("Keith" , "Kozma", "Assignment 5.4") + '\n');

/*
============================================
; Title: Filtering/Reducing Complex Data Structures
; Author: Keith Kozma
; Date: 19 July 2019
; Description: This is a program that utilizes the map() method to filter certain elements within the array collection.
============================================
*/

// Start Program
var famousComposers = [
  {
    Rating: '8',
    Composer: 'Beethoven',
    Genre: 'Classical'
  },
  {
    Rating: '10',
    Composer: 'Mozart',
    Genre: 'Classical'
  },
  {
    Rating: '9',
    Composer: 'Bach',
    Genre: 'Classical'
  },
  {
    Rating: '6',
    Composer: 'Haydn',
    Genre: 'Classical'
  },
  {
    Rating: '5',
    Composer: 'Schubert',
    Genre: 'Classical'
  }
];

var composersByRating = famousComposers.map(function(composer) {

});

var composersByGenre = famousComposers.map(function(composer) {

});

console.log("-- COMPOSER BY RATING --");

famousComposers.forEach(function(rating) {
  console.log("Rating: " + rating.Rating + '\n' + "Composer: " + rating.Composer + '\n');

});

console.log("-- COMPOSER BY GENRE --");

famousComposers.forEach(function(genre) {
  console.log("Genre: " + genre.Genre + '\n' + "Composer: " + genre.Composer + '\n');

});

// end program
