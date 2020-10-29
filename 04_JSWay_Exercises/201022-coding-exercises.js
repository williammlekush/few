/* Coding exercises from eloquentjavascript.net.
Uncomment/recomment to test the different exercises. */

// ELOQUENT JAVASCRIPT CH 2

// Hash triangle

// define empty string to store hashes
let hashes = "";

// add a '#' to the string 7 times
for (let i = hashes.length; i < 7; i ++) {
hashes += "#";
console.log(hashes);
}

// FizzBuzz

// // move an index from 1 to 100
// for (let x = 1; x <= 100; x ++){
//    // this function checks if x is divisible by y
//    let checkFactor = (x = 1, y = 3) => x % y === 0;

//    // if a function is divisible by 3 and not 5, print Fizz
//    if(checkFactor(x, 3) && !checkFactor(x, 5)) console.log("Fizz");
//    // if a function is divisible by 5 and not 3, print Buzz
//    else if(!checkFactor(x, 3) && checkFactor(x, 5)) console.log("Buzz");
//    // if a function is divisibile by 5 and 3, print Fizz Buzz
//    else if (checkFactor(x, 3) && checkFactor(x, 5)) console.log("Fizz Buzz");
//    // else, print the index
//    else console.log(x);
// }

// Chessboard

// // define a string to store the chessboard
// let chessboard = "";
// // define the square dimension of the chessboard
// let size = 9;

// // move an index up to the size to define the rows
// for (let i = 0; i < size; i ++){
   
//    // this function checks if anumber is even
//    let checkEven = x => x % 2 === 0;

//    // this function inputs a row as long as the size into the string, alternating the inputs
//    let drawRow = (char1 = " ", char2 = "#") => {
//       for (let x = 0; x < size; x ++){
//          if(checkEven(x)) chessboard += char1;
//          else chessboard += char2; 
//       }
//    }

//    // if its an even row, write the row with default iputs
//    if (checkEven(i)) drawRow();
//    // if its an odd row, write the row alternating "#" and " "
//    else drawRow("#", " ");

//    // move to the next line in the string
//    chessboard +="\n";
// }
// console.log(chessboard);

// ELOQUENT JAVASCRIPT CH 3

// Minimum

// // this function compares x and y and returns the smaller number
// let min = (x = 0, y = 0) => {
//    if (x < y) return x;
//    else return y;
// }
// console.log(min(0, 10));
// console.log(min(0, -10));

// Recursion

// // this fucntion checks if a number is even or not
// const isEven = x => {

//    // if the number is negative, multiply by 1 and call recursion
//    if (x < 0) {
//       x = -1 * x;
//       return isEven(x);
//    }
//    // if the number is 0, it is even
//    else if (x === 0) return true;
//    // if the number is 1, it is odd
//    else if (x === 1) return false;
//    // otherwise, call recursion with number-2
//    else return isEven(x-2);
// }

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

// Bean Counting

// // this function counts "B"s in a string
// const countBs = phrase => {
//    let count = 0;

//    for (let char of phrase) if (char === "B") count++;
   
//    return count;
// }

// console.log(countBs("BBC"));

// // this functions counts the given character in a string
// const countChar = (phrase, character) => {
//    let count = 0;

//    for (let char of phrase) if (char === character) count++;
    
//    return count;
// }

// console.log(countChar("kakkerlak", "k"));

