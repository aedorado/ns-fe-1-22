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
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     // this.numofEyes = 2;
//     // this.sayHello = function() {
//     //     console.log(`My name is ${this.name}`);
//     // }
// }

// // CHECK
// Person.prototype.age = 0;
// // console.log(p.__proto__.hasOwnProperty('age'));


// // prototypal inheritance
// Person.prototype.numofEyes = 2;

// Person.prototype.sayHello = function() {
//     console.log(`My name is ${this.name}`);
// }

// let p = new Person('A', 25);
// p.numofEyes = 10;
// console.log(p.numofEyes);
// console.log(p.hasOwnProperty('name'));
// console.log(Person.prototype.hasOwnProperty('age'));
// console.log(p.hasOwnProperty('numofEyes'));
// console.log(p.hasOwnProperty('sayHello'));
// console.log(p.hasOwnProperty('x'));

// let p1 = new Person('A', 25);
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
// console.log(obj.hasOwnProperty('x'));

// Spread Operator
// ... 
// expands an iterable in a place where 0 or more elements are expected

function sum(x, y, z) {
    return x + y + z;
}

let a = [1, 2, 3];
// console.log(sum(a[0], a[1], a[2]));
// console.log(sum(...a)); // sum(1, 2, 30, 12);   sum(1, 2);

let b = [...a];
// console.log(b);

let c = [5, 6, 7, 8];

let d = [...a, 10, 20, ...b, 30, 40, ...c, 50];
// console.log(d);

let obj1 = {
    x: 10,
    y: 20,
    z: 30
};

let obj2 = {
    z: 40,
    ...obj1,
}

// console.log(obj2);
// rest
function f1(b, c, ...a) {
    console.log(b, c);
    console.log(a);
}

// f1(1, 2, 3, 4, 5);

// console.log(1, 2,3 ,4 5, 6, 7, 8)
// log(a);
// log(a, b);
// log(a, b, c);
// log(...a) {

// }

// class & class based inheritance in JS

class Person {
    static staticProperty = 'static property value';
    static m1() {
        return 'static method called';
    }

    constructor(firstname, age) {
        this.firstname = firstname;
        this.age = age;
    }

    getBio() {
        console.log(`I am ${this.firstname} and I am ${this.age} years old`);
    }
}

class Employee extends Person {
    constructor(firstname, age, company) {
        super(firstname, age);  // should be first line is subclass constructor
        this.company = company;
    }

    yearsTillRet() {
        console.log(`You have ${60 - this.age} years till retirement @ ${this.company}.`)
    }

}

let e = new Employee('Anurag', 25, 'Google');
// e.yearsTillRet();
// e.getBio();

// let p = new Person('Anurag', 25);
// p.getBio();
// console.log(p);
// console.log(Person.staticProperty);
// console.log(Person.m1());

// getters & setters on objects
let obj11 = {
    get location() {
        return 'India';
    },
    get name() {
        return 'Mathura';
    },
}
// console.log(obj11.location, obj11.name);

const language = {
    set current(name) {
        this.log.push(name.trim());
        this.numOfUpdates++;
        this._current = name.trim();
    },
    get current() {
        return this._current;
        // return this.log[this.log.length - 1];
    },
    numOfUpdates: 0,
    log: []
}

language.current = 'EN';
console.log(language.log);
console.log(language.log, language.numOfUpdates);
console.log(language.current)


language.current = '   HI                      ';
console.log(language.log, language.numOfUpdates);
console.log(language.current)


language.current = 'ID';
console.log(language.log, language.numOfUpdates);

console.log(language.current)

language.current = 'FR';
console.log(language.log, language.numOfUpdates);
console.log(language.current)














