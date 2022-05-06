
// // names can contain letters, digits, underscores, & dollar sign
// // names must being with a letter
// // names can also being with $ & _
// // reserved words/keywords cannot be used as variable names - let, var, const, class
// let _s5 = 100;
// // let let = 100;
// // let my_var_+-() = 100;
// // console.log($s5);

// // let, var, const
// // without anyting

// let x = 5;
// let y = 5.5;
// let s = 'About us';

// x = 10;
// a = 100;    // -> var

// // console.log(a);

// const b = 5000;
// // b = 100;
// // console.log(b);

// // loosely typed - types of variables are decided as the script/program runs
// // strongly typed - types of all variables are decided before runtime 
// // let z = 5;
// // console.log(z);
// // z = 7.4
// // console.log(z);
// // z = "About";
// // console.log(z);
// // z = [1, 2, 3];
// // console.log(z);

// // In Java
// // int x = 1;
// // x = 1.1; -> possible loss of precision

// let k;
// console.log(k);
// k = 10;
// console.log(k);

// // if a variable is decalred using let or const, it cannot be redeclared in the same block
// let b;

// ----------------------------
// let & const were introduced in JS in 2015
// 

// let is block scoped
// let k = 100;
// if (true) {
//     let k = 50;
//     {
//         let k = 10;
//         console.log(k);
//     }
// }
// console.log(k);

// var m = 10;
// console.log(m);
// var m = 100;
// console.log(m);

// var has global scope
// var n = 10;
// if (true) {
//     {
//         var n = 100;
//     }
// }
// console.log(n);

var a = 1;
var a = 2;

// var a = 1;
// let a = 2;

// let a = 1;
// var a = 2;
console.log(a);




