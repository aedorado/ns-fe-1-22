// https://developer.mozilla.org/en-US/docs/Web/Events#event_listing
// console.log(document.getElementById('head-1'));

// console.log(document.getElementById('para-1'));

// head1.innerHTML = 'Updated by JS!! :)'

// DOM Selectors
let head1 = document.getElementById('head-1');
// console.log(head1);

let ps = document.getElementsByTagName('p');
ps[0].innerHTML = "123";
ps[1].innerHTML = "345";
ps[2].innerHTML = "567";
// ps.innerHTML = 'adlfls';

let ebc = document.getElementsByClassName('para');
// console.log(ebc);

// CSS selectors
let csr = document.querySelector('div > p');
let csrAll = document.querySelectorAll('div > p');

csrAll = document.querySelectorAll('.para');
// console.log(csrAll);

// console.log(csrAll);

// csrAll.forEach(element => {
//     element.innerHTML = 'QSA';
//     // console.log(element);
// });

// console.log(ps);

let nimg = document.getElementById('nature-img');
// console.log(nimg);
nimg.src = "img/win1.png";
// nimg.alt = "alt text here";
nimg.id = "id-by-js";


// nimg = document.getElementById('id-by-js');
// console.log(nimg);

let time = document.getElementById('current-time');
// time.innerHTML = `<b>${new Date()}</b>`;
// console.log(time);

time.style.border = "1px solid red";
time.style.borderRadius = "4px";

// document.write('hello!');

function h2Clicked(ele) {
    console.log(ele);
    ele.innerHTML = 'Continue;';
}

// show a button on screen
// when button is clicked
// we want to show the current time 
// inside #current-time paragraph

let show = true 
function showTime() {
    if (show) {
        let d = new Date();
        document.getElementById('current-time').innerHTML = d;
    } else {
        document.getElementById('current-time').innerHTML = "";
    }
    show = !show;
}

document.getElementById('button-2').onclick = showTime;

function showloaded() {
    console.log('Doc loaded!');
}

function capitalize() {
    let ii = document.getElementById('fname');
    ii.value = ii.value.toUpperCase();
    console.log(ii.value);
}

document.getElementById('fname').onchange = capitalize;

// function mOver(ele) {
//     console.log(ele);
//     ele.innerHTML = 'Mouse is over me';
// }

// function mOut(ele) {
//     ele.innerHTML = 'Mouse out';
// }

// window.onkeypress = function () {
//     console.log('key pressed');
// }

// let f = capitalize;
// let g = capitalize();

// function x() {
//     return 1;
// }

// let f = x;
// let g = x();

// addEventListener(event, handler, useCapture -> optional)

let testDiv = document.getElementById('test-div');
testDiv.addEventListener('click', function(e) {
    e.target.innerHTML = 'I was clicked!';
});
// testDiv.addEventListener('click', function() {
//     console.log('div clicked 2');
// });
// testDiv.addEventListener('mouseover', function() {
//     console.log('mouse over me.. ')
// });


// window.addEventListener('resize', function() {
//     document.getElementById('test-div').innerHTML = Math.random();
// });

window.addEventListener('keypress', function(event) {
    console.log(event.key);

    document.getElementById('test-div').innerHTML += event.key;

});





