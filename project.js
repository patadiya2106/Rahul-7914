// 1 . Write a Javascript program to find thearea of a triangle

let base = 15; height = 12;

let trianglearea = (base * height) / 2;

console.log("Area of a Triangle : ", trianglearea);

// OUTPUT :- 1. Area of a Triangle :  90

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a Javascript program to convert temp.. to and celsius , fahrenhit

let celsius = 35;

let fahrenhit = (celsius * 9 / 5) + 32;

console.log("covert celsius into fahrenhit : ", fahrenhit);

// OUTPUT : - 2. covert celsius into fahrenhit : 95

///////////////////////////////////////////////////////////////////////////////////////////////////////

//  3. Wrtie a Javascript program to find the area of rectangle. 

let length = 45, breadth = 90;
let rectangleArea = length * breadth;

console.log("Area Of Rectangle = " + rectangleArea);

// Output :- 3. Area Of Rectangle = 4050

// //////////////////////////////////////////////////////////////////////////////////////////////////

// 4. Wrtie a Javascript program to find the area of circle.

let radius = 15;
let circleArea = 3.14 * radius**2;

console.log("Area Of Circle = ", circleArea);

// Output : - 4. Circle Area = 706.50

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Wrtie a Javascript program to convert feet into inches.

let feet = 6;
let inches = feet * 12;

console.log("convert feet into inches : " , inches);

// Output :- 5. 60 inches

////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Write a javascript program to calculate given number

// 1. a**2 - b**2 = (a - b)(a + b);

let a = 9, b = 5;

let num1 = a ** 2 - b ** 2;

console.log("left side number : ", num1);

let num2 = (a - b) * (a + b);
console.log("right side number: ", num2);

console.log("mum1 and num2 are equal : ", num1 == num2);

// output : - True

//////////////////////////////////////////////////////////////////////////////////////////////////////////
 
// 2.(j-k)**(j-k)=j** - 2*J*K + k**

let j = 21, k = 15;

let num5 = j ** 2 - 2 * j * k + k ** 2
console.log("left side number : ", num5);
let num6 = (j - k) ** 2;
console.log("right side number: ", num6);
console.log("num4 and num6 are equal : ", num5 == num6);

// output : true.

/////////////////////////////////////////////////////////////////////////

//  3. (p+q+r)(p+q+r)= p**2 + q**2 + r**2 + 2pq + 2pr + 2qr;

let p = 20, q = 10, r = 8;

let num3 = (p + q + r) ** 2;

console.log("left side number : ", num3);

let num4 = p ** 2 + q ** 2 + r ** 2 + 2 * (p * q) + 2 * (p * r) + 2 * (q * r);

console.log("left side number : ", num4);

console.log("num3 and num4 are equal : ", num3 == num4);


// output : true.

// 4.(a-b-c)*(a-b-c) = a**2 + b**2 + c**2 - 2*a*b - 2*a*c + 2*b*c;

let x = 10, y = 6, z = 4;

let num7 = (x - y - z) * (x - y - z);

console.log("left side number : ", num7);

let num8 = x ** 2 + y ** 2 + z ** 2 - 2 * x * y - 2 * x * z + 2 * y * z;

console.log("right side number : ", num8);

console.log("num7 and num8 are equal : ", num7 == num8);

// Output:-  true

// ---------------------------------------------------------------------------------------------------------------------

// 5 (a-b)**3 = a**3 - 3*a**2*b + 3*a**2*b - b**3

let s = 10, t = 4;
let num9 = (s - t) ** 3;
let num10 = s ** 3 - 3 * s ** 2 * t + 3 * s * t ** 2 - t ** 3;

console.log("left side numbr : ", num9);
console.log("right side number : ", num10);

console.log("num9 and num10 are equal : ", num9 == num10);

// Output:-   true










