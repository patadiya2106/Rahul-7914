// 1. Write JS Program to check number is Palindrome or not


// let number = +prompt("Enter the number to check number is palindrome or not");
// let regularNumber = number;
// let reverseNumber = 0;

// while (number > 0) {
//     let digit = number % 10;
//     reverseNumber = reverseNumber * 10 + digit;
//     number = (number - (number % 10)) / 10;
// }

// if (regularNumber === reverseNumber) {
//     console.log(regularNumber, "This number is a palindrome.");
// } else {
//     console.log(regularNumber, "This numbwer is Not a palindrome.");
// }
// ------------------------------------------------------------------------------------------------------------------------

// 2. Print Series 1, 4, 3, 16, 5,

// for (let i = 1; i <= 10; i++) {
//     console.log(i % 2 === 0 ? i * i : i);
// }
// -----------------------------------------------------------------------------------------------------------------------

// 3) Print Multiplication table of n


// let n = 22;

// for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
// }

// --------------------------------------------------------------------------------------------------------------------

// 4) Find out sum of digit of given number

// let number = +prompt("enter the number");

// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = (number - (number % 10)) / 10;
// }

// console.log("sum of the digits is:", sum);

// --------------------------------------------------------------------------------------------------------------------------

// 5. Print series 1, 1, 2, 3, 5, 8, ...

// let a = +prompt("Enter a Number :");
// let p = 1; q = 1;
// let r;

// for (let i = 1; i <= a; i++) {
//     if (i == 1) {
//         console.log(p);
//     } else if (i == 2) {
//         console.log(q);
//     } else {
//         r = p + q;
//         p = q;
//         q = r;
//         console.log(r);
//     }
// }