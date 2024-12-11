// function as a varible

let add = function (r, j) {
    console.log(r + j);
}
add(210, 520);

// Arrow Function

// 1.Method

let mul = (s,t) => {
    return s * t;
}
console.log(mul(200, 8));

// 2.method single statement return 

let subs = () =>"HELLO GUYS WELCOME TO THE JAVASCRIPT";

console.log(subs());

// IIFE => Immediatly invoking function expression

    (function (x, y) {
        console.log("IIFE......", x - y);
    
    })(20697485, 8500);

