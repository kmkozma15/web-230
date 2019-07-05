/*
    Title:Discussion 6.1
    Author: Keith Kozma
    Date: July 4, 2019
    Description: This is a simple program which utilizes object prototypes to access elements through inheritance.
    This file contains multiple errors.
*/

/*
Expected output:

===== Puppy Details =====
Bolt
Siblings: Molly, Sparky & Chloe

===== Kitten Details =====
2 months
Left eye: green
Right eye: blue

*/
var newPuppy = {
  furColor: 'Beige',
  eyeColor: 'Blue',
  age: '1 month',
  gender: 'male',
  name: 'Bolt',
  siblingNames: ['Siblings: ', 'Molly, ', 'Sparky & ', 'Chloe']
};

var newKitty = {
  furColor: 'white',
  eyeColor: ['Left eye: green', 'Right eye: blue'],
  age: '2 months',
  gender: 'female',
  name: 'Dolly',
  motherName: 'Tiny'
};

let kittyAge = newKitty[age];
let kittyEyeColor = newKitty[eyeColor];
let siblings = newPuppy[siblingNames];
let puppyName = newPuppy[name];

console.log('===== Puppy Details =====');

console.log(puppyName);

for (let s = 1; s =< siblings.length; s++) {
  console.log(siblings[s] + "\n");
  }

console.log('===== Kitten Details =====');

console.log(kittyAge);

for (let e = 1; e =< kittyEyeColor.length; e++) {
  console.log(kittyEyeColor[e]);
  }
console.log("\n");
