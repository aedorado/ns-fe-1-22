// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Arrays enable us to use the same variable to access many values
// Array can contain elements of different types

//         0  1  2     3    4
// let arr = [1, 5, 123, 3.4, "this string"];    // 5
// console.log(arr);

// length of array = number of elements in the array
// console.log(arr[3]);

// array length = l
// insert @ -> l + n , then the array length becomes  l + n + 1

// let a = [];
// // console.log(a, a.length);
// a[0] = 4;   // insert 4 @ postion 0
// // java will give indexoutofbound
// a[1] = 5;
// a[2] = 8;
// a[5] = 4;
// a[5] = 404;
// a[1] = 10;
// console.log(a, a.length, typeof a);
// console.log("last ele: ", a[a.length - 1])

// console.log('for of ...')
// for (let x of a) {
//     console.log(x);
// }

// console.log(a[1000]);
// console.log(a.length);

// let f = function(ele) {
//     console.log(ele * 10);
// }







let f = function (a) {
    console.log(a);
}


// let arr = [5, 7, 1, 0, 6, 3, 4, 5];
// // arr.forEach(ele => console.log(ele));
// arr.forEach((ele, i) => {
//     console.log(ele);
//     console.log(ele);
// });


// arr.forEach((ele, i, arr) => {
    // console.log(ele);
// });
// arr.forEach((ele, i, third_arg, fourth, fifth) => {
//     console.log(`Array arr contains value=${ele} @ index=${i}`);
// //    console.log(ele, i);
// }); // for each element of the array arr, apply the function f on it

// Anonymous function


// f(5) -> 5
// f(7) -> 7
// f(1) -> 1
// ...
// f(5) -> 5

// for (var x of arr) {  // x = 5    7   1   0   6   3   4   5   .. loop ends
//     console.log(x);
// }


// Add elements to end or array
// Remove lement from the end of array
let arr = ["apple", "bat", 45, "cat", "dog", 123];

// unshift -> push from start; returns the length of the new array
// console.log(arr.unshift("apricot"));
// console.log(arr.unshift("alpha"));
// console.log(arr.unshift("aeroplane"));
// console.log(arr);

// shift -> pop from start; returns the removed element
let sv = arr.shift();
// console.log(sv, arr);
sv = arr.shift()
// console.log(sv, arr);
let a1 = [1, 3];
let a2 = [4, 6];
let a3 = [7];
let a4 = [10, 11];
let a5 = a1.concat(a2, a3, a4); 
// a4 = a1 + a2
// let a5 = a4.concat(a3);
// console.log(a1, a2, a3, a4);
// console.log(a5);


// console.log(arr.toString());
// console.log(arr.join(" / "))
// arr[arr.length] = "new element";
// arr[arr.length] = "new element 1";
// arr[arr.length] = "new element 2";
arr.push("last element 1");
arr.push("last element 2");
// console.log(arr);
arr.pop();
arr.pop();
arr.pop();
// console.log(arr);

// console.log(typeof arr);
// console.log(typeof 1);
// console.log(Array.isArray(arr));

// splice - add elements to the array
// splice(index to add, number of elements to delete, ... n elements to add)
// let arr1 = ["apple", "bat", "cat", "dog", "eel"]; 
// let arr2 = arr1.slice(2);
// let arr2 = arr1.slice(2, 4);
// console.log(arr1);
// console.log(arr2);
// arr1.splice(1, 3, "ice", "water");
// arr1.splice(2, 0, "eel", "frog", "girrafe", "hippo");   // 8
// console.log(arr1);
// arr1.splice(5, 0, "duck");
// arr1.splice(7, 0, "swan");
// console.log(arr1);

// Array Traversal
// let nums = [100, 65, 34, 12, 89, 104, 3221, 108];
// console.log(ats);

// let ats = ["eel", "yak", "goldfish", "shark", "lion", "monkey"];

// console.log(typeof nums[0]);
// ats.sort(function (a, b) { return a.localeCompare(b) > 0;  });
// ats.reverse();
// nums.sort();
// console.log(ats);

let ats = ["yak", "eel", "shark", "apple", "lion", "monkey"];
// console.log("abc".localeCompare("xyz"));    // -1
// console.log("xyz".localeCompare("abc"));    // 1
// console.log("abc".localeCompare("abcd"));   // -1
// console.log("abc".localeCompare("abc"));   // 0
// ats.sort(function (a, b) { return b.localeCompare(a); });
// ats.sort(function (a, b) { return a.length - b.length; });
ats.sort(function (a, b) { 
    if (a.length == b.length) {
        return b.localeCompare(a);
    }
    return a.length - b.length;
    // return a.length == b.length ? 
                // a.localeCompare(b): a.length - b.length; 
});
// console.log(ats);
// console.log(Math.random()); // [0 - 1)
// ats.sort((a, b) => 0.5 - Math.random());
// console.log(ats);

// let nums = [31, 23,  1, 5, 7, 9, 1, 4, 2, 3];
// nums.sort();    // by default it compare elements as strings
// nums.sort(function (a, b) { return a - b; });
// +ve -> 
// -ve ->
// a = 31, b = 23 -> a-b=8  // 23 31
// [23 31 1 5 6 ]
// a = 31, b = 1 ->  a-b=30 // 1 3
// [23 1 31 5 6 ]
// a = 31, b = 5 ->  a-b=26 // 5 31

// a - b -> +, -, 0
// b - a -> -, +, 0

// if the comparaison function (a-b)
// returns +ve
// returns -ive
// return 0
// a-b < 0 -> a is put before b -> a < b -> a must be place before b
// a-b > 0 -> b is put before a -> a > b -> a must be placed after b
// a-b = 0 -> no change in the order of a & b

// sort by default sort in ascending order
// for any other order we have to give a function

// console.log(nums);

// Array iteration methods
// they work on each element of the array
;
// MAP creates a new array by performing
// a function on each element of the array
ats = [1, 3, 19, 41, 31, 7, 14, 8];
// ats_mapped = ats.map((ele) => ele / 2);
// ats_mapped = ats.map((ele, i) => `arr[${i}]=${ele}`);
// console.log(ats_mapped);

// FILTER functoin creates a new array
// with all the elements for which
// the callback function returns true
// ats_filtered = ats.filter((ele) => ele > 10);
// ats_filtered = ats.filter((ele) => ele % 2 == 0);
// ats_filtered = ats.filter((ele, idx) => idx % 2 == 0);
// console.log(ats_filtered);
// console.log(ats);

// every -> bool
// checks if every element of the array passes a test
ats = [5, 1, 30, 3];
// let b = ats.every(ele => ele % 3 == 1)
// console.log(b);
// some -> bool
// return true if one or more elements pass a test
let b = ats.some(ele => ele % 2 == 0);
// console.log(b);

// find -> returns the first value which passes a test
let element = ats.find(ele => ele > 20);
let index = ats.findIndex(ele => ele > 50);
// console.log(index);

// reduce - runs a function on every element of the array
// and reduces the array to a single value
// sum of the array
ats = ["5", "1", "30", "3"];
ats = [14, 2, 3, 4, 10, 4, 8, 15];
// let sum = ats.reduce((a, b) => a + b, 100);
let max = ats.reduce((a, b) => {
    return Math.max(a, b)
}, 100);
// 100 + 1 = 101
// 101 + 2 = 103
// 103 + 3 = 106
// 106 + 4 = 110
atsm = ats.map((ele, i) => ele * i);
console.log(atsm);


console.log(max);












