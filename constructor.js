// Constructor => Special method of class (automatically call when object ic created)

// 1) Default Constructor
// 2) Parameterized Constructor
//     */

// 1.Default Constructor

class Test {
    constructor() {
        console.log("Default Constructor called......")
    }
    sayHello() {
        console.log("Hello My Friend!.")
    }
    sumAddition() {
        console.log("Sum", a + b);

    }
}
let rj = new Test()

rj.sayHello()

// ii) Parameterized Constructor

class Demo {
    constructor(king, a, b) {
        this.king = king;
        this.a = a;
        this.b = b;
        this.sum = a + b;

        console.log("Constructor called.......");
        console.log("Sum of a + b in constructor:", this.sum);
    }

    sayHello() {
        console.log("Hello how are you ????", this.king);
    }

    sumAddition() {
        console.log("Sum of A + B:", this.sum);
    }
}

let virat = new Demo("Virat-Kohli ", 12, 56);
virat.sayHello();
virat.sumAddition();