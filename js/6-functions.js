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
        console.log(z);
    }
    B(2);
}
A(1);

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


function add (x = 8, y, z = 0) {
    return x + y + z;
}
// console.log(add(2, 1));


// closures
// currying
// setTimeout
// setInterval
// IIFE
// HOF
// Hoisting


// String
// Array
// Date
// object

