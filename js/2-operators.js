let x = 10;
let y = 5;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x % 3);
// console.log(x**2);  // x * x
// console.log(x**3);  // x * x * x
// console.log(x**5);  // x * x * x * x * x

// x += y; // -> x = x + y -> x = 10 + 5 = 15
// y *= x; // -> y = y * x -> y = 5 * 15 = 75
// x -= y;
// +=
// -=
// *=
// /=
// %=
// x **= 3;    // x * x * x
// console.log(x, y);

// let s = "This "
// s += " is me."
// console.log(s);


// let m = 4 + 4;
// let m = "5 - 4 - 2";
// console.log(m);

// Comparison operators
let a = 10;
let b = 5;
// console.log(a < b);
// console.log(a > b);
// console.log(a <= b);
// console.log(a != 10);
// console.log(a == 9);

// console.log(9 == "9");
// console.log(9 === "9");
// console.log("9" === "9");
// === -> true if type & value are same
// === -> false if either type of value is not the same

// console.log(9 != 8);
// console.log(9 != 9);

// != does not take the type in consideration
// console.log(9 != "9");  // 9 != 9
// console.log(9 !== "9");  // 9 !== "9"

// == -> ===
// != -> !==

// These operators compare only value & not type
// != 
// ==

// These operators compare both the value & the types
// !==
// === 

// >
// <
// <=
// >=
// !=
// ==

// 9 == "9" -> false
// 9 == "9" -> 9 == 9 / "9" == "9" (JS says for me type is not relevant with ==)

// Normally -> 9 != "9" -> true
// In JS   ->  9 != "9" -> 9 != 9 -> false

// == -> ===
// != -> !==

// == 
// != 

// !==
// ===

// &&
// ||
// !

// && -> returns false if any of the conditions are false Or falsy

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// false

// Falsy Values are treated as false in conditions
// false
// 0
// null
// undefined
// NaN
// ""

// Truthy values are treated as true in conditions
// Any value that is not a falsy value
// a, b, c, d, e, f, aa, ab, ac, aaa, aaaa, 

// undefined
// "undefined"


if (100) {   
    console.log("inside if");
} else {
    console.log("inside else");
}

// if (100 || "dog" || "cat" || false) -> if (100) -> if (true) 
// if (undefined && true && null && true) -> if (undefined) -> if (false) 

// // console.log(undefined && true && null && true);
// console.log(100 || "dog" || "cat" || false);

// && -> always returns the first falsy value. if there is not falsy value then it returns true
// || -> always returns the first truthy value. if there is no truthy value then it returns false



// typeof



