// create a school class and create and faclty method Name , email , contact number

class rnw {
    student(name, email, contactNumber) {
        console.log("Student Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${contactNumber}`);
    }

    faculty(name, email, contactNumber) {
        console.log("Faculty Details:- ");
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Contact: ${contactNumber}`);
    }
}

let details = new rnw();

details.student("Rahul Patadiya", "rahulpatadiya07@gmail.com", "8000828245");

details.faculty("Mr.Girish Sir", "girishgondliya50@gmail.com", "98765643210");

// Output : -Student Details:- 
// Name: Rahul Patadiya
// Email: rahulpatadiya07@gmail.com
// Contact: 8000828245
// Faculty Details:- 
// Name: Mr.Girish Sir
// Email: girishgondliya50@gmail.com
// Contact: 98765643210

// ------------------------------------------------------------------------------------------------------------------------


// 2.Create Person class with argument Name ane age

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class employee extends person {
    hello() {
        console.log(`Name :${this.name} Age : ${this.age}`);
    }
}
const detail = new employee("Rahul Patadiya", "23");

detail.hello();

// Output : Name :Rahul Patadiya
//           Age : 23 
// Employee class creates a constructor called print a simple message.


// ------------------------------------------------------------------------------------------------------------------------

// 3.Employee class creates a constructor called print a simple message

class data {
    constructor(){
        console.log("Hello sir i learning javascrip!!!.......")
    }
}

const storedata = new data()

// Output : Hello sir i learning javascrip!!!.......


// -------------------------------------------------------------------------------------------------------------------------

// 4.Create a shape class and create a rectangle and circle method find circle........

class shape  {
    rectangleArea(w, h) {
        return w * h;
    }
    circleArea(r) {
        return 3.14 * r * r;
    }
}

const value = new shape ();
console.log("Rectangle Area is :", value.rectangleArea(35, 28));
console.log("Circle Area is :", value.circleArea(46));

// Output :Rectangle Area is : 980
//          Circle Area is : 6644.24