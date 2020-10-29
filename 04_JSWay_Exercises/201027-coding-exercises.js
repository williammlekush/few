/* These are coding exercises from The JavaScript Way */

// JS Way Ch 6

// RPG Character Experience

// const aurora = {
//    name: "Aurora",
//    health: 150,
//    strength: 25,
//    xp: 0,

//    // Return the character description
//    describe() {
//       return `${this.name} has ${this.health} health points and ${this
//          .strength} as strength and ${this.xp} XP points`;
//    }
// };

// // Aurora is harmed by an arrow
// aurora.health -= 20;

// // Aurora equips a strength necklace
// aurora.strength += 10;

// // Aurora learn a new skill
// aurora.xp += 15;

// console.log(aurora.describe());

// Modeling a Circle

// const r = Number(prompt("Enter the circle radius:"));

// // This is a circle object.
// function circle(radius = 1) {
//    return {
//       radius: radius,

//       circumference: function() {
//          return(this.radius * 2 * Math.PI);
//       },
//       area: function() {
//          return(this.radius * this.radius * Math.PI);
//       }
//    }

// }

// const circle1 = circle(r);

// console.log(`Its circumference is ${circle1.circumference()}`);
// console.log(`Its area is ${circle1.area()}`);

// JS Way Ch 7

// Muskateers

// musketeers = ["Athos", "Porthos", "Aramis"];

// for (let musketeer = 0; musketeer < musketeers.length; musketeer ++) console.log(musketeers[musketeer]);

// musketeers.push("D'Artagnan");

// musketeers.forEach(musketeer => console.log(musketeer));

// musketeers.splice(2, 1);

// for (const musketeer of musketeers) console.log(musketeer);

// Sum of values

// const values = [3, 11, 7, 2, 9, 10];

// // This function sums all the values in an array.
// let sumVals = sumArray => {
//    let sum = 0;
//    sumArray.forEach(val => sum += val);
//    return sum;
// }

// console.log(sumVals(values));

// Array Max

// var values = [3, 11, 7, 2, 9, 10];
// // This sorts the array from min to max and returns the last value.
// values.sort(function(a, b){return a - b});
// console.log(values[values.length - 1]);

// JS Way Ch 8

// All Exercises:

// const word = String(prompt("Type a word:"));
// console.log(wordInfo(word));

// // This function casts a string to an array and its length, the word reversed number of vowels, and the uppercase and lowercase componenets.
// const wordInfo = (wordIn = "Something") => {
//    const wordArray = Array.from(wordIn);

//    const wordCase = checkCase(wordArray); 
//    const vowelCount = countVowels(wordArray);
//    const reverse = reverseWord(wordArray);
//    const palindromeCheck = checkPalindrome(wordArray);

//    return(wordIn + " is " + wordArray.length + " letters long.\n" + "Reverse: " + reverse + "\n" + "Palindrome: " + palindromeCheck + "\n" + vowelCount + wordCase);
// }

// // This function checks the case of every letter in an array.
// const checkCase = (wordArr = Array.from("Something")) => {
//    let uppercaseParts = "";
//    let lowercaseParts = "";

//    wordArr.forEach(letter => {
//       if (letter === letter.toUpperCase()) uppercaseParts += letter;
//       else lowercaseParts += letter;
//    })

//    return("Uppercase: " + uppercaseParts + "\nLowercase: " + lowercaseParts);
// }

// // This function counts the number of vowels in an array.
// const countVowels = (wordArr = Array.from("Something")) => {
//    const vowels = Array.from("aeiou");
//    let count = 0;
   
//    wordArr.forEach(letter => {
//       if (vowels.includes(letter.toLowerCase())) count += 1;
//    })

//    return("Vowel Count: " + count + "\n")
// }

// // This function reverse the a word array and returns the reversed word
// const reverseWord = (wordArr = Array.from("Something")) => {
//    const wordArrReverse = wordArr.reverse();
//    const wordReverse = wordArrReverse.join("");
//    return (wordReverse);
// }

// // This function checks if the word array is a palindrome or not.
// const checkPalindrome = (wordSeparated = Array.from("Something")) => {
//    const wordForward = wordSeparated.join("");
//    const wordForwardNormalized = wordForward.toLowerCase();

//    const wordBackward = reverseWord(wordSeparated);
//    const wordBackwardNormalized = wordBackward.toLowerCase();

//    if (wordForwardNormalized === wordBackwardNormalized) return true;
//    else return false;
// }