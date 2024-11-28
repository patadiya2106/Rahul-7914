// Switch case

// switch(condition) {
//     case 1: add;
//         break;
//     default:
//         break;
// }

let number1=20, number2=4545, choice = "sub";

switch (choice) {
    case "add":
        console.log("Addition is :  ", number1 + number2)
        break;
    case "sub":
        console.log("Substraction is :  ", number1 - number2)
        break;
    case "pro":
        console.log("Product is :  ", number1 * number2)
        break;
    case "div":
        console.log("Division is :  ", number1 / number2)
        break;
    case "mod":
        console.log("Reminder is :  ", number1 % number2)
        break;

}

let marks = +prompt("Enter your Marks");

    if (marks >= 90 && marks <= 100) {
    console.log("Your Grade is A+");
    }
    else if (marks >= 80 && marks <= 89) {
        console.log("Your Grade is A");
    }   
    else if (marks >= 70 && marks <= 79) {
        console.log("Your Grade is B+");
    }
    else if (marks >= 60 && marks <= 69) {
        console.log("Your Grade is B");
    }
    else if (marks >= 50 && marks <= 59) {
        console.log("Your Grade is C");
    }
    else if (marks >= 49 && marks <= 33) {
        console.log("Your Are pass");
    }
    else if(marks > 33 && marks >= 0){
        console.log("Sorry, YOU are one of the best student in my class",marks); 
    }
    else {
        console.log("Please Enter Valid Number...")
    }

