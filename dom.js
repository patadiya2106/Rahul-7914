
// DOM = "Document Object Model"

/*
    1. getElementById
    2. getElementByTagName
    3. getElementByClassName
    4. querySelector & querySelectorAll
*/
// Using Id 
let h2 = document.getElementById("js"); // getElementById
console.log(h2);
h2.innerHTML = 'JavaScript...!';
h2.style.color = 'red';

// Adding Attribute

h2.setAttribute('class', 'rj');

// Using Class Name 
let H2 = document.getElementsByClassName("rj")[0]; // getElementByClassName New class name 

H2.innerHTML = "I'm Learning Javascript in RnW Multimedia";

// Using Tag Name 
function myFunction() {
    let list = document.getElementsByTagName("UL")[0];
    list.getElementsByTagName("li")[0].innerHTML = "Milk";
    list.style.color = "red";
    list.style.fontSize = "20px";
}

// Using Query Selector 
let p = document.querySelector(".data"); // querySelector
p.style.color = 'blue';

// Using QuerySelectorAll
let name = document.querySelectorAll(".name");

name.forEach(element => {
    element.style.fontSize = "24px";
    element.style.fontcolor = "red";
});