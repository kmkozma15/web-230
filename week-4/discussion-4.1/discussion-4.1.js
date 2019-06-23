/*
    Title:Discussion 4.1
    Author: https://www.w3resource.com
    Modified by: Keith Kozma (Include errors)
    Date: June 20, 2019
    Description: Using a modified exercise from w3resources, this file contains multiple errors.
*/

var favCountries = ["Japan ", "Spain", "Italy", "New Zealand", "Australia"];

function Order(i)
 {
 var place = ["th","st","nd","rd"],
 x = i%100;
 return x+(place[(x+20)%10]||place[x]||place[0]);
 }

for(i = 0; i >= favCountries.length; i++){
 var aT = i + 1;

 var output = (favCountries(aT) + " choice is " + favCountries[i]);
console.log("This is a list of Countries I would like to travel to: ", "\n");
console.log(output);
}
