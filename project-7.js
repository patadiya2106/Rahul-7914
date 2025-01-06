// create a school class and create and faclty method Name , email , contact number

class rnw {
    constructor(name) {
        this.name = name;
    }

    student(name, email, contact) {
        console.log(`Student Name : ${this.name}`)
        console.log(`Student Email : ${this.email}`)
        console.log(`Student Contact-number : ${this.contact}`)
    }
}

// const facult


// 2.Create Person class with argument Name ane age


class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class employee extends person {
    hello() {
        console.log(`MY Name is ${this.name} MY Age is ${this.age}`);
    }
}
const detail = new employee("Rahul", "23");

detail.hello();