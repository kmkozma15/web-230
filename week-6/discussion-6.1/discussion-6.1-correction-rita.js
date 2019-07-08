/*
==========================================
Title: Discussion Board 6.1
       Objects and Built-In Objects
Author: codecademy.com
  Modified by: Rita
Date: July 2, 2019
Description: Find 2 errors
==========================================
*/

// // Import statement from header file
// const header = require('../debraal-header.js')
// // Print statement with firstName, lastName, and assignment parameters
// console.log(header.display('Rita', 'DeBraal', 'Discussion 6.1'))


let spaceship = { // Create a spaceship object with properties
  homePlanet: 'Earth',
  color: 'silver',
  fuelType: 'Turbo Fuel', // Removed single quotes around 'Fuel Type' and combined into one word. This was done because the element was seen as a string instead of an object.
  numCrew: 5, // Added a comma to show separation between elements.
  flightPath: ['Venus', 'Mars', 'Saturn']
};

/*
  Assign numCrew property to variable crewCount
*/
var crewCount = spaceship.numCrew // Added a period between spaceship and numCrew to show separation between the array and identified element.
// Assign flight path to planetArray variable
var planetArray = spaceship.flightPath

// // Import statement from header file
// const header = require('../debraal-header.js')
// // Print statement with firstName, lastName, and assignment parameters
// console.log(header.display('Rita', 'DeBraal', 'Discussion 6.1'))

// Print crewCount
console.log(crewCount)
// Print planetArray
planetArray.forEach(planet => {
  console.log(`${planet}`)
  }
);
