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
console.log(a1, a2, a3, a4);
console.log(a5);


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













