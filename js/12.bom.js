// hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

console.log(x);
xyz();
console.log(xyz);

let x = 7;
var xyz = function () {
    console.log('from function');
}
console.log(x);

