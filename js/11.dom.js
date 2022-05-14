// console.log(document.getElementById('head-1'));

// console.log(document.getElementById('para-1'));

// head1.innerHTML = 'Updated by JS!! :)'

// DOM Selectors
let head1 = document.getElementById('head-1');
console.log(head1);

let ps = document.getElementsByTagName('p');
ps[0].innerHTML = "123";
ps[1].innerHTML = "345";
ps[2].innerHTML = "567";
// ps.innerHTML = 'adlfls';

let ebc = document.getElementsByClassName('para');
console.log(ebc);

// CSS selectors
let csr = document.querySelector('div > p');
let csrAll = document.querySelectorAll('div > p');
console.log(csrAll);

csrAll.forEach(element => {
    element.innerHTML = 'QSA';
    // console.log(element);
});

// console.log(ps);



