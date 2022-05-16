
// console.log('before timeout');

// setTimeout(() => {
//     console.log('2nd timeout');
// }, 3000);

// let t = setTimeout(() => {
//     console.log('1st timeout');
// }, 2000);



let t = setInterval(() => {
    console.log('after every 1s');
}, 1000);

setTimeout(() => {
    clearInterval(t);
}, 4000);

// console.log('after timeout');



