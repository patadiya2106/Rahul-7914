// -> 1.Object With Array, 2.Looping, 3.Accecss In Array and Object Make Quotes.

// let object= {
//     name: "Rahul Patadiya",
//     hobby: ['Not reading', 'playing Cricket', 'Traveling'],
//     address: {
//         line1: "YogiChowk",
//         line2: "Canal Road",
//         city: "Surat",
//         pincode: "395007"
//     }
// }
// console.log(object);
// console.log(object.hobby[1]);
// console.log(object.address.city);
// console.log(object['hobby'][0]);
// console.log(object['address']['line1']);

// 2.Looping = Two Type 

let data = [10, 20, 30, 40, 50,60,70]

// 1 For in  [object/array]

// for(let i in data){
//     console.log("For in Method :",i, data[i]);
// }

// 2 For of  [array]

// for(let i in data){
//     console.log("For of Method :",i, data[i]);
// }

// 3. Convert In Array and Object Make Quotes

// let ele = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jolly" },
//     { id: 3, name: "Smith" },
//     { id: 4, name: "Fina" },
// ]
// console.log(ele);
// console.log(ele[3]['name']);


// let team = [
//     { id: 1, name: "Rohit sharma" },
//     { id: 2, name: "King Kohli" },
//     { id: 3, name: "Suraya 360" },
//     { id: 4, name: "Rishab Panat" },
//     { id: 5, name: "Axar Patel" },
//     { id: 6, name: "Shivam Dube" },
//     { id: 7, name: "Chapriii Bhai (Pandya)" },
//     { id: 8, name: "Bapu" },
//     { id: 9, name: "Kuldeep Yadav" },
//     { id: 10, name: "Arshhepdeep Singh" },
//     { id: 11, name: "Jassii Bhaiii" },
//     { id: 12, name: "Siraj bhai DSP" },
// ]

// function generatenumber() {
//     let number  = Math.floor(Math.random() * team.length);
//     // console.log(number)
//     console.log(team[number])

//     let record = team[number];

//     document.getElementById('name').innerHTML = record.name;
//     document.getElementById('num').innerHTML = record.id;
// }