https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// Car -> white, 4 wheel
// start, stop

// object can have both properties & methods

let car = {
    fuelCap: 100,   // total max fuel allowed
    fuel: 50,       // fuel right now
    move: function(x) { 
        this.fuel -= (x / 10);
    },
    // reduce fuel 1L for every 10KM the car moves
    start: function() { 
        if (this.fuel > 0) {
            console.log('Start'); 
        } else {
            console.log('Out of fuel, cannot start');
        }
    },
    checkFuel: function() { 
        console.log(`Fuel available: ${this.fuel}`); 
    }
}

let fakeCar = {
    fuel: -100
}
fakeCar.checkFuel = car.checkFuel;
// fakeCar.checkFuel();
// car.checkFuel();

let obj1 = {
    x: 100,
    px:  function () {
        console.log(this);
    }
}

obj1.px();


// let f = () => {
//     console.log(this.x);
// }
// let obj1 = {
//     x: 10,
// }
// let obj2 = {
//     x: 25
// }
// let obj3 = {
//     z: 100
// }

// let f1 = f.bind(obj1);
// f1();


// let f = obj1.f1.bind(obj3);
// console.log(f);
// f();

// F.bind(obj) -> returns a function F-dash with the same body as but value of this bound to obj

// F.call(obj) -> calls the function F with value of this set to obj 
// obj2.f1 = obj1.f1;
// obj2.f1();
// console.log(obj1.f1);
// obj1.f1.call(obj2, 150, 100, 25);



// function showX() {
//     console.log(this.x);
// }

// showX.call(obj1);   // console.log(obj1.x)
// showX.call(obj2);


// o.showX = showX;
// o.showX();

// o1.showX = showX;
// o1.showX();



// car.start();   
// this in traditional functions is bound to the object on which the call is made 
// when we call a normal function on an object, that function will know that the value of this should point to that object, in the case car
// car.checkFuel();
// car.move(500);
// car.checkFuel();
// car.start();

// // console.log(car.color);
// // console.log(car["model"]);
// // console.log(car.cost, car['cost']);
// // console.log(typeof car);

// // method - function defined on an object

// function print(x) { console.log(x); }

// let person = {
//     rollNo: "ISM2013001",
//     firstName: "Anurag",
//     lastName: "S",
//     giveIntro: function () {
//         let intro = this.rollNo + " " + this.firstName + " " + this.lastName;
//         return intro;
//     }
// };

// console.log(person.giveIntro());

// this always points to the object in context of which the function is called
// this always points to the current object in case of object

// traditional functions  -> bing the value of this to the object on which they are called

// arrow fucntions -> do not bind this to the context with which they are called
// they use the this in the enclosing scope





// methods
// use of this


// Browser
// DOM
// Selectors
// Dom manipuation
// events

