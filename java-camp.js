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

//challenge 2
/*
WRONGS: some Number isnt someNumber, constant variable is unable to change, syntax erroro
*/

const some Number = 20;

someNumber = 50