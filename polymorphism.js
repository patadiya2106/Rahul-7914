// polymorphism => Polymorphism is one of the core concepts of object-oriented programming languages where poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times.

// 1.complie polymorphism
// 2. Run-time polymorphism

// Run-time Polymorphism 

class Calculator {
    add(a, b, c = 0) {
        return a + b + c;
    }
}

const result = new Calculator();

console.log(result.add(2852, 22));

console.log(result.add(25, 38, 54));

////////////////////////////////////////////////////////////////

class smit {
    hello() {
        console.log("hello Rahul!!! How are you ?");
    }
}

class rahul extends smit {
    hello() {
        console.log("Hii Smit...");
    }
}

const jay = new smit();

jay.hello();

const gautam = new rahul();

gautam.hello();

///////////////////////////////////////////////////////////////////////