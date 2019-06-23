/*
===========================================================
Title: Secret Message
Author: codecademy.com
Date: 17 June 2019
Modified By: Rita DeBraal
Modified By: Keith Kozma (fixed errors)
Description: Covert an array to a secret message that starts
             with 'Programming is not...'
============================================================
*/

// The array to be manipulated
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
                     'easily', 'the', 'first', 'time,', 'it', 'is', 'about',
                     'what', 'you', 'can', 'figure', 'out.', '-2015,',
                     'Chris', 'Pine,', 'Learn', 'JavaScript']; /* Added closing bracket before semi-colon to show the closing of the array*/

secretMessage.pop() // Removes the last array element
secretMessage.push('to', 'Program') // Adds to the end of the array
secretMessage[7] = 'right' // Changes the word easily to right /* Changed the element from 2 to 7 to target the word easily and change it to "right" */
secretMessage.shift() // Removes the first string in array
secretMessage.unshift('Programming') // Adds to the array as the first element
/*
Removes get, right, the, first, time
with know,
*/
secretMessage.splice(6, 2, 'know,');
console.log(secretMessage.join(' '))// Joins the message with no commas /* Added a blank space between the words to remove the commas */
