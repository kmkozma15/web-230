// Header file output
var header = require("../../kozma-header")
console.log(header.display("Keith" , "Kozma", "Discussion 5.1") + '\n');
/*
    Title:Discussion 5.1
    Author: https://www.w3resource.com
    Modified by: Keith Kozma (Include errors)
    Date: June 20, 2019
    Description: Using a modified exercise from w3resources, this file contains multiple errors.
*/
var favFoods = new Map();
favFoods.set('spaghetti', 'meatballs');
favFoods.set('beans', 'rice');
favFoods.set('fruit', 'salad');
favFoods.set('water', 'lemon');
favFoods.set('biscuits', 'gravy');

for (var [key, value] of favFoods) {
  console.log(key + " with " + value);
}
