// Header file output
var header = require("../../kozma-header")
console.log(header.display("Keith" , "Kozma", "Discussion 5.1") + '\n');
/*
    Title:Discussion 5.1
    Author: Keith Kozma
    Date: June 28, 2019
    Description: This is a simple program using an array to display a list of some favorite foods.
*/
var favFoods = new Map();
favFoods.set('spaghetti', 'meatballs');
favFoods.set('beans', 'rice');
favFoods.set('fruit', 'salad');
favFoods.set('water', 'lemon');
favFoods.set('biscuits', 'gravy');

console.log('== Favorite Foods ==');
console.log("\n");

for (var [key, value] of favFoods) {
  console.log(key + " with " + value);
}
console.log("\n");
