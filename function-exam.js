// Q_1.Print good morning message

function greeting(hello) {
    if (hello) {
        console.log(hello)
    }
    else {
        console.log("Good Morning........!!!!!!!");
    }
}
greeting();

// --------------------------------------------------------------------

// Q_2.Circle Area...........

function areaCircle(radius) {

    const area = Math.PI * radius ** 2;

    return area;
}
console.log("The Area of Circle is a", areaCircle(5));

// output :- 78.5398.......

// ---------------------------------------------------------------

// Q_3.Tringle area.............

function triangleArea(b, h) {

    var triArea = (b * h) / 2;

    return triArea;
}
console.log("The Area of Triangle is", triangleArea(9, 20));

// output :- 90

// --------------------------------------------------------------------------------


// Q_4 Rectangle Area................

function areaRectangle(l, h) {

    var recArea = l * h;

    return recArea;
}
console.log("The Area of Rectangle is", areaRectangle(50, 40));

// Output : 2000

// -------------------------------------------------------------------------
 
// Q_5 (b*b)(4*a*c))/(2*a)...................

function ans(a, b, c) {

    var num = ((b * b) * (4 * a * c)) / (2 * a);

    return num;
}
console.log("Answer: ", ans(3,4,5));

// OUTPUT :- 160

// -------------------------------------------------------------------

// Q_6 (a*a) + (2*a*b)+(b*b).........

function answer(a, b) {

    var result = (a * a) + (2 * a * b) + (b * b);

    return result;
}
console.log("Answer ", answer(12,15));

// Output :-- 729


// -------------------------------------------------

// Q_7 frahniht.................

        function fahrenheait(f) {
            var a = f - (32 / 1.8);
            return a;
        }
    console.log(fahrenheait(35));

// Output :- 17.22......

// Q_8 celcius......

function celcius(c) {

    var fahrenheit = (c * 1.8) + 32;

    return fahrenheit;
}
console.log(celcius(50));

// output :- 122

// --------------------------------------------------------------------------------------
// Q_9 find Even or odd Number

function oddeven(u){
    if(u%2==1){
        console.log("This number is ODD......");
    }
    else{
        console.log("This number is EVEN...........");
    }
  }

oddeven(51);

//   Output num = 51 This Number is ODD......

// ------------------------------------------------------------------------------------

// Q_10 Swapping program without third varible...

function swapping(r, p) {
    console.log("R =", r, ", P =", p);
    r = r + p;
    p = r - p;
    r = r - p;
    console.log("After swapping: R =", r, ", P =", p);
  }
  swapping(110, 220)

//   Output AFTER SWAPPING: R=220 , P=110;