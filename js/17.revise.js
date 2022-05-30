
// document.getElementById('first');
// document.getElementById('first');
// document.getElementById('second');
// document.getElementById('second').setAttribute('class', 'dc');
// document.getElementById('second').setAttribute('id', );
// document.getElementById('second').setAttribute('id', 'third');
// document.getElementById('second');
// document.getElementById('third');

// selectors
// how to change style
// how to change attribures

// Create elements

// let dcl = document.getElementsByClassName('dc');
// console.log(dcl);
// for (let i = 0; i < dcl.length; i++) {
//     const element = dcl[i];
//     element.style.backgroundColor = 'teal';
// }

// const div = document.createElement('div');
// div.innerHTML = 'Created in JS!';
// document.getElementById('second').appendChild(div);

// console.log(div.parentElement);
// document.getElementById('third').appendChild(div);
// console.log(div.parentElement);


function y(f) { // f = x
    f();        // x()  -> console.log(100);
}

function x() {
    console.log(100);
}

y(x);


// window.onload = function() {
//     console.log('not window has loaded!');
// }

// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(data => {
//     element.addEventListener(fucntion() {
//         // will always have acces to data
//     })
// })


// let globalData;

// fetch(url)
// .then(res => res.json())
// .then(data => {

//     function x() {

//     }

//     globalData = data;
//     // use data here
// })

// // here i will use global data
// globalData.data.x;

// function f(data) {
//     // data processing... 
// }

// map & filter
// async
// closure & hoisting
// let a = [1, 2, 3];
// let b = a.map(x => x * 2);
// console.log(b);
// let c = a.filter(x => x % 2 == 0);
// console.log(c);

// function x() {
//     let a = 10;
//     function y(b) {
//         console.log(a + b);
//     }
//     return y;
// }

// let f = x();
// f always has access to the latest value of vairbales in its scope
//  function y(b) { console.log(a+b); } 
//
//
// f(25); -> console.log(10+25);
