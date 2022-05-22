// hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// console.log(x);
// xyz();
// console.log(xyz);

console.log(x);
xyz();
var x = 7;
function xyz() {
    console.log('from function');
}
let abc = function() {}

