/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp"); //

// What’s Wrong? Syntax error. The code was missing a closing parenthesis, semi-colon at the end of the closing parenthesis, and quotation mark at the end of the closing parenthesis.

// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === "eight") {
    numbers[i] = 8;
  }
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? Runtime error. The values in the array is a string. Strings do not compute to integers when the code is executed, so you have to add logic in the code to check for the string value eight and convert it to a number.

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly marks some numbers as prime or not prime.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; //Suppose to indicate that a number is NOT prime.
    }
  }
  return true; //Suppose to indicate that the number is prime.
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong? Logic error. Numbers divisible by i are not considered prime, so you should return that the value is false in the if statement instead of true. The second return value should be converted to true to indicate that numbers not divisible by i are prime.
