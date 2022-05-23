// let person = {
//     name: "Anurag",
//     numOfEyes: 2,
//     sayHello: function() {
//         return `${this.name}`
//     }
// };

// let person2 = {
//     name: "John",
//     numOfEyes: 2,
//     sayHello: function() {
//         return `${this.name}`;
//     }
// }

// console.log(person2.sayHello());

// constructor function
// new operator generates a new empty object for the particular instance
// and it gives us access to that empty object
// via the this keyword
// when we call this function with new, it returns this new object
function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.numofEyes = 2;
    // this.sayHello = function() {
    //     console.log(`My name is ${this.name}`);
    // }
}

// CHECK
Person.prototype.age = 0;
// console.log(p.__proto__.hasOwnProperty('age'));


// prototypal inheritance
Person.prototype.numofEyes = 2;

Person.prototype.sayHello = function() {
    console.log(`My name is ${this.name}`);
}

let p = new Person('A', 25);
p.numofEyes = 10;
// console.log(p.numofEyes);
// console.log(p.hasOwnProperty('name'));
// console.log(Person.prototype.hasOwnProperty('age'));
// console.log(p.hasOwnProperty('numofEyes'));
// console.log(p.hasOwnProperty('sayHello'));
// console.log(p.hasOwnProperty('x'));

let p1 = new Person('A', 25);
// console.log(p1.numofEyes);
// console.log(p.hasOwnProperty('name'));
// console.log(p.__proto__.hasOwnProperty('age'));
// console.log(p1.hasOwnProperty('numofEyes'));

// p.sayHello();
// console.log(p.numofEyes);
// let p1 = new Person('B', 26);
// console.log(p1.numofEyes);
// console.log(p, p1);

// prototype - object 
// on this object, we put everything that we want to share
// with all the instances of this consturctor function

// let a = [];
// console.log(a.hasOwnProperty('length'));
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);
// console.log(a.__proto__.__proto__.__proto__);

// let f = function () {

// }
// console.log(f.__proto__);
// console.log(f.__proto__.__proto__);
// console.log(f.__proto__.__proto__.__proto__);

Array.prototype.myF = function() {
    console.log('a new function on array');
}
// let a = [];
// a.myF();

// let b = [];
// b.myF();

// let c = [];
// c.myF();


// Object.prototype.hasOwnProperty = () => 'bazinga!'
Object.hasOwnProperty = () => 'b'
let obj = {
    x: 10
}
console.log(obj.hasOwnProperty('x'));

