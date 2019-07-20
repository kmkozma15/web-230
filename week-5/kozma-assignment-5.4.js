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
  return "Rating: " + composer.Rating + '\n' + "Composer: " + composer.Composer + '\n';
});

var composersByGenre = famousComposers.map(function(composer) {
  return "Genre: " + composer.Genre + '\n' + "Composer: " + composer.Composer + '\n';
});

console.log("-- COMPOSER BY RATING --");

composersByRating.forEach(function(rating) {
  console.log(rating);

});

console.log("-- COMPOSER BY GENRE --");

composersByGenre.forEach(function(genre) {
  console.log(genre);

});

// end program
