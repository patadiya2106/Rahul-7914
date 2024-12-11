// Recusrion function ===> A function call itself again and again



// function helloWorld(r) {
//     console.log("Inside function Called", r);
//     if (r > 15) {
//         helloWorld(--r);
//     }
//     console.log("Function Finished.....", r);
// }

// helloWorld(20);

// ------------------------------------------------------------------------

// factorial Number

// function factorial(j) {
//     if (j == 1) {
//         return 1;
//     } else {
//         return j * (factorial (j - 1));
//     }
// }

// console.log(factorial(10));

// ------------------------------------------------------------

// fabonacci Series

function fab(r, a = 0, b=1) {
    if (r === 0) {
        return 0;
    }

    console.log(a);
    
    fab(r - 1, b, a + b);
    
}
fab(10);