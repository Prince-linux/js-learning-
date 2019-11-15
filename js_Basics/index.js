console.log("Hello, World!");

//varaiables
let firstName = "Prince";
let lastName = "Boamah";
console.log(firstName, lastName);
//constants
const interestRate = 0.1;
console.log(interestRate);
//primitive data types
let name = "mosh"; //string literal
let age = 30; //number literal
let isApproved = true; //boolean literal
let sex = undefined; //undefined
let selectedColor = null; // null
//Reference data types
// 1. objetcs
let person = {
  name: "Doris",
  age: 29
};
//Dot Notatation
person.name = "Enyonam";
//Bracket Selection
let selection = "name";
person[selection] = "Boamah";

console.log(person.name);
//console.log(person[name]);
//2. Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = 1;
console.log(selectedColors.length);
//3. Functions
function greet(firstName, lastName) {
  console.log("Hello " + firstName + " " + lastName);
}
greet("Doris", "Boamah");

function square(number) {
  return number * number;
}
console.log(square(9));
