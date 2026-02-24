// prob 1 
let name = "Samra";
let age = 20;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

//prob 2

var a = 10;
var a = 20;
console.log(a);

//output 2
//prob 3 
const pi = 3.14;
pi = 3.1416;
console.log(pi);
//err pi const is redeclearing 

// prob 4 

let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);

//prob 5 

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

//prob 6 
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
 //prob 7 
 function add(a, b) {
  return a + b;
}

console.log(add(5, 3));

//prob 8 
const square = (num) => {
  return num * num;
};

console.log(square(4));

//prob 9 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log(fruits[1]);

//prob 10
let numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

///intermadiate 

let number1 = 10;
let number2 = 5;
let operator = "+";  // change this to test

if (operator === "+") {
  console.log(number1 + number2);
} else if (operator === "-") {
  console.log(number1 - number2);
} else if (operator === "*") {
  console.log(number1 * number2);
} else if (operator === "/") {
  console.log(number1 / number2);
} else {
  console.log("Invalid operator");
}
// arr large number 
function largest(arr){
  let max = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
  }

  return max;
}
// small number function smallest(arr){
  let min = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
  }

  return min;
//function countEven(arr){
  let count = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      count++;
    }
  }

  return count;

// dom 
// document object modle
 function sumArray(arr){
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  return sum;
}
//call back
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Done!");
}

greet("Samra", done);

//
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b);
//find fectorial 
let n = 5;
let fact = 1;

for(let i=1;i<=n;i++){
    fact *= i;
}

console.log(fact);
//palendrom
let str = "madam";

let rev = str.split("").reverse().join("");

if(str === rev){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}
// vol
let str1 = "javascript";
let count1 = 0;

for(let i=0;i<str1.length;i++){
    if("aeiou".includes(str1[i])){
        count1++;
    }
}

console.log(count1);
//max num
let arr = [10, 50, 30, 90, 20];

let max = arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);
//random numb
let randomNum = Math.floor(Math.random() * 100) + 1;

console.log(randomNum);
//fabbonacii series
let n = 6;

let a = 0, b = 1;

console.log(a);
console.log(b);

for(let i=2;i<n;i++){
    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}
