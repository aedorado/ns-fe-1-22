// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function 

// // DRY -> Dont Repeat Yourself

// // function sayHello() {
// //     console.log('Hello!');
// // }

// // function sq(a) {
// //     console.log(a * a);
// //     a = 500;
// //     console.log(a);
// // }

// // function sum(a, b) {
// //     return "abc";
// // }

// // console.log(sum(1, 4)); // console.log(5);
// // console.log(sum(10, 4)); // console.log(5);

// // function () {
// //     console.log("hellos");
// // }

// // function expressions
// const sayHellos = function () {
//     console.log("hellos");
// }

// const x = function() { 
//     console.log('I am f');
// }

// let f1 = function() {
//     console.log('function f1');
// }

// f1();
// const y = 10;
// console.log(f1);
// console.log(sayHellos);
// sayHellos()



// function sum (a, b) {
//     console.log(a + b);
// }

// let sum = function(a, b) {
// 	console.log(a+b);
// }


// sum(1, 2);


let f1 = function() {
    console.log('I am f1');
}



// function s(a) {
//     console.log(a);
// }
// s(100);

let execute = function(f) { // f = panda
    f();    // panda()
}

function jack() {
    console.log('I am Jack Sparrow');
}

function panda() {
    console.log('I am Kung Fu Panda');
}

// execute(panda);

// execute(f1);
// f1();
// execute(myFunction);



// FFCO = Functions are first class objects in JS
// A function can be treated as a normal variable in JS

// Callback -> A function is passed to another function & called later on

// let getSayHello = function() {
//     let sh = function() {
//         console.log("Hello");
//     };
//     return sh;
// }

// let sayHello = getSayHello();
// sayHello();
// console.log(sayHello);



let sayHello = function() {
    let sh = function() {
        console.log("Hello");
    }
    return sh;
}

// multi leve nested functions
function A(x) { // x = 1
    function B(y) { // y =2
        function C(z) { // z = 3
            console.log(x + y + z); // x, y, z -> 1 + 2 + 3 = 6;
        }
        C(3);
        // console.log(z);
    }
    B(2);
}
// A(1);

// sayHello()();   // sh ()

// sayHello();
// let rv = sayHello();
// console.log(rv);
// rv();

function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
}

// console.log(fact(6));


// function add (x = 8, y, z = 0) {
//     return x + y + z;
// }
// console.log(add(2, 1));


// Arrow functions

// traditiona function
// function () {
//     console.log('hello');
// }

// function expression
// let hello = function () {
//     console.log('hello');
// }
// hello();

// arrow function
let hello = () => {
    console.log('hello');
}
// hello();

// let print = function(arg) {
    // console.log(arg);
// }

let print = (arg) => {
    console.log(arg);
}
// print(123);

// function sum(a, b) {
//     console.log(a + b);
// }

// let sum = function (a, b) {
//     console.log(a + b);
// }

// let sum = (a, b) => {
//     console.log(a + b);
// } 

// if the body has only one line, we can skip the curly brackets around the body
// if the only line in the function returns a value, we can skip the return keyword

let sum = (a, b) => a + b;

// console.log(sum(3, 5));

// Currying
// A concept of fucntional programming
// functional languages -> everything is a function
// functional langages are based on lambda calculus
// currying is aconcept of lambda calculus

// other programming languages (C, C++, Java etc) they are based on computer architechture

// JS is somewhere in between
// First class functions is a concept of functional languages
// Objects are a concept of OOP languages

// Curring transforms a function
// f(a, b, ... n) -> f(a)(b)(c) ... (n)
// f(a)(b)(c) -> fa(b)(c) -> fab(c)...(n) ... -> F(n) -> result

// Currying decomposes functions with multiple arguments
// into a sequence of functions that accept one argument at a time

// non-curry
let add = function (a, b, c) {
    return a + b + c;
}
// console.log(add(1, 2, 3));

// let addCurry = function (a) {
//     return function B(b) {
//         return a + b;
//     };
// }
// console.log(addCurry(10));  
// return value of addCurry(10) -> function B(b) { return a + b};    a = 10;




console.log(addCurry(10)(5));






















// closures
// currying
// setTimeout
// setInterval
// Ananymous Function
// IIFE
// HOF
// Hoisting


// String
// Array
// Date
// object





