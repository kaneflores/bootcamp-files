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

/*challenge 3
result data type is a string
*/

const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + variable2;
console.log(resultVariable);

/*
challenge 4:
invalid code because improper syntax
*/

const objectVariable = {
    prop1: 'I am property 1',
    prop2: 'I am prop2',
    prop3: [20,30,40]
};

console.log(objectVariable.prop3[2])

/*
challenge 5:
invalid code because out of bounds access
*/

const myarray = [20,30,40];

console.log(myarray[2])

//JAVASCRIPT OPERATORS
const a = 20;
let b = 20;

//dont use  var no point
// no difference between ' or ""

let startingnumber = 0;
startingnumber++;

const result = 20 ===20 ? 'values match' : 'values dont match'

const arr = ['adkfjafd', 10, 20, '30', 'akdjfkldg']
for (let i =0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
        console.log(arr[i]);
    }
}

//arrow function
const arrowFunction = () => {
    console.log('i am an arrow func');

}
/*
arrow funciton syntatx

() => {
    }

* */

function sample (){

}

const myFunction = () => {
    let mynumber = 20;
    return mynumber;
    mynumber = 50; // will never reach
}

function solution(str){
  return str.split("").reverse().join("")
}

function evenOrOdd(number) {
  if (number %2===0){
    return "Even";
  }
  return "Odd"
  
}

function findSmallestInt(arr) {
  let smallest = arr[0]
  for (let i = 0; i<arr.length; i++){
    if (arr[i] < smallest){
      smallest = arr[i];
    }
  }
  return smallest

}