// Q_1 javascript  program to print expected Output using the following Arry........

let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(", "));
// Output: - Red, Green, White, Black
console.log(myColor.join("+"));
// Output: - Red+Green+White+Black
console.log(myColor.slice(0, 3).join(", "));
// Output: - Red, Green, White
console.log(myColor[0]);
// Output: - Red
console.log(myColor.slice(1, 3).join(", "))
// Output: - Green, White
myColor.push("Orange");
console.log(myColor.join(", "));
// Output: - Red, Green, White, Black, Orange

// ---------------------------------------------------------------------------------------------
// Q_2 Program to the all array element using for loop anr foreach loop

let value = [10, 20, 30, 40, 50, 60, 70];

sum = 0;

for (let i = 0; i < value.length; i++) {
    sum += value[i];
};
console.log("Sum of all element Using Loop:- ", sum);

let value1 = 0;

value.forEach((ele, index) => {
    value1 += ele;
})
console.log("Sum of all element Using foreach Loop:- ", value1);

// Output: -   Sum of all element Using Loop: -  280
//             Sum of all element Using foreach Loop: -  280

// ----------------------------------------------------------------------------------------------

// Q_3 Print maximum number minimum nunber

let check = [5007482, 897841151, 8445, 1, 12001, 123105];

check.sort((a, b) => a - b);
let min = check[0];
let max = check[check.length - 1];

console.log("Maximum Number is :", max);
console.log("Minimum Number is :", min);

// Output:-Maximum Number is : 897841151
//         Minimum Number is: 1

// -----------------------------------------------------------------------------------------------------

//Q_4.Write a JavaScript program to convert all array elements into ASCII values.

let myName = ['R', 'A', 'H', 'U', 'L', 'j'];


function convertToAscii(array) {
    return array.map(char => char.charCodeAt(0));
}
let ascilArray = convertToAscii(myName);

console.log("ASCII Array:", ascilArray);

// Output:-[82, 65, 72, 85, 76, 106]

// --------------------------------------------------------------------------------------------------------

// Q_5 Javascript program remove nagetive value....

let number = [-23, -20, -17, -12, -5, 0, 1, 5, 12, 19, 20];

let positiveNum = number.filter((ele, index) => {
    return ele > 0;
})
console.log(positiveNum);

// Output:- [1, 5, 12, 19, 20]

// -----------------------------------------------------------------------------------------------

// Q_6 Retrun the square of the array element

let arr = [2, 5, 6, 3, 8, 9];

let squareNum = arr.map((ele, index) => {
    return ele * ele;
})
console.log(squareNum);

// Output: -[4, 25, 36, 9, 64, 81]

// ------------------------------------------------------------------------------------------------

// Q_7 sorting an array ascending descending

let numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];

let ascending = numbers.sort((a, b) => a - b);
console.log("Ascending value:", ascending);

let descending = numbers.sort((a, b) => b - a);
console.log("Descending value:", descending);

//  Output :-  Ascending value: (11)[0, 1, 5, 5, 12, 12, 17, 19, 20, 20, 23]
//             Descending value: (11)[23, 20, 20, 19, 17, 12, 12, 5, 5, 1, 0]

// -----------------------------------------------------------------------------------------------------

// Q_8 Which filter out any string................


let words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

let fltrString = words.filter((ele) => {
    return ele.length >= 8;
});
console.log(fltrString);

Output: -['Javascript']

// -------------------------------------------------------------------------------------------------------

// Q_9 write a javaScript program to print output for the following string.

// // 1.
let a = "airplane";
console.log(a[2]);

// // 2.

let b = "oxoxoxox";
let answer = "";

for (let i = 0; i < b.length; i++) {
    answer += (i % 2 === 0) ? b[i].toLowerCase() : b[i].toUpperCase();
}
console.log(answer);

// // 3.
let c = "A New Java Book";

let d = c.toLowerCase((ele, index) => {
    return ele.length;
})
console.log(d);

// Output: -r
//         oXoXoXoX
//         a new java book

// --------------------------------------------------------------------------------------------------------

// Q_10 write a JavaScript program for array reverse.

let reverseArry = [11, 22, 33, 44, 55, 66, 77];
console.log("Reverse Array is  :", reverseArry.reverse());

// Output: -[77, 66, 55, 44, 33, 22, 11]

// ---------------------------------------------------------------------------------------------------------

// // Q_11 Find a value is found or not

let friend = ["smit", "gautam", "jay", "ajay"];

console.log(friend.includes("ajay"));

// Output :-true

console.log(friend.includes("dharmik"));

// // Output :-false

// -----------------------------------------------------------------------------------------------------------

// Q_12 Write a JavaScript program to print your name and write the number of total characters

let Name = "rahul";

console.log(Name.length);

// Output:- 5

// --------------------------------------------------------------------------------------------------------------

// Q_13 program given this output using replace concet

let string = `I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning`

let output = string.replace(/dog/g, "cat");

console.log(output);

// Output: - I often take a walk with my cat in the evening.His cat follows him everywhere.I don't feed my cat in the morning

// ----------------------------------------------------------------------------------------------------------------

// Q_14 convert string to array

let input = "Hire the top 1% freelance developers";

let stringToArray = input.split(" ");

console.log(stringToArray);

// output: -['Hire', 'the', 'top', '1%', 'freelance', 'developers']

// -------------------------------------------------------------------------------------------------------------------3

// Q_15 write a JavaScript program to convert an array to string

let array = ['5', 32, 'Daniel'];

let arrayToString = array.join(" ");

console.log(arrayToString)

// output:-5 32 Daniel




