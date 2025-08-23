//Challenge 1
const myBoolean = true;
const myString = "hello world";
const firstNumber = 20;
let secondNumber = 40;
secondNumber = 80;

let myArray = [myBoolean, myString];

let myObject = {
    firstProp: myArray,
    sumProp: firstNumber + secondNumber
};

console.log(myObject);
console.log(myObject.sumProp);

console.log(myObject.firstProp[1]);
