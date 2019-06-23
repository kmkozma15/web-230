/**
 * Title: Discussion Board 4.1
 * Author: Nathaniel Liebhart
 * Modified By: Keith Kozma
 * Date: June 19th, 2019
 * Description: Application with two errors using an array method
 */

 // The goal of this program is to remove Phone from the array and place Mouse in its place.

// This is an array of animals, but one of the items isn't an animal
var animals = ['Cats', 'Dogs' , 'Cows', 'Phone']; // Noticed there was a comma missing between Dogs and Cows - added comma
// This method will take in 3 parameters in order to remove the item that doesn't belong and add in Mouse
animals.splice(3, 1, 'Mouse'); // The slice method used will return the selected elements within the array where as
// the splice method will add, remove, or modify the items within the array and return the modified array.
// This will print the items within the array
console.log(animals);
