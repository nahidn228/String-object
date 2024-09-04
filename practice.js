/* Task 1
1. Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output: ['orange', 'yellow', 'green', 'blue', 'red']

*/

/*
let colors = ["red", "blue", "green", "yellow", "orange"];
let reverse = [];
for (let i = colors.length-1; i >= 0; i--) {
  reverse.push(colors[i]);
  console.log(reverse);
}
console.log(reverse);

*/

/* Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]

*/

/*
let numbers = [12, 98, 5, 41, 23, 78, 46];
let even = [];

for (let i = 0; i < numbers.length; i++) {
  //console.log(numbers[i]);

  if(numbers[i] % 2 === 0){
    even.push(numbers[i])
    //console.log(numbers[i]);
    //console.log(even)
  }
}
console.log(even) */

/*
Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output: 'TomTimTinTik' */

/*
let numbers = ["Tom", "Tim", "Tin", "Tik"];
console.log(numbers.join('')); */

/*Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I' */

/*
for(i = 0; i< statement.length; i++){
  console.log(i, statement[i])
} */
// let word1 = statement.slice(0, 1);
// let word2 = statement.slice(2, 4);
// let word3 = statement.slice(5, 6);
// let word4 = statement.slice(7, 11);
// let word5 = statement.slice(12, 19);
// let word6 = statement.slice(20, 26);

// let fullWord = [word1 + word2 + word3 + word4 + word5 + word6];

// let reverse = fullWord.reverse;

//console.log(reverse);

//console.log(fullWord);

let statement = "I am a hard working person";
console.log(statement.split(" ").reverse().join(" "));
