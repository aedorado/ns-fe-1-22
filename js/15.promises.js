
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

// let p = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1000), 2000);
// });

// p.then(
//     data => console.log(data), // success case
//     err => console.error(err)  // failure case
// );
// console.log(p);

// setTimeout(() => console.log(p), 3000);

// console.log('after promise');

const getData = (n) => new Promise((resolve, reject) => {
    setTimeout(
        () => typeof n === 'number' ? resolve({ val: n*2}): reject('not a number'),
        2000
    )
});

// getData(10).then(
//     d => {
//         console.log(d);
//         throw 'new error';
//         // return d * 5;
//     },
//     e => console.error(e),
// ).then(val => 
//     {   
//         console.log(val);
//         return val * 'a1324' + '123';
//     },
//     e => {
//         console.log('err=', e);
//         throw 'new error 1'
//     } 
// )
// .then(val => console.log("val=",val), e=>console.log("e1=", e));


// getData(5).then(
//     d => {
//         d * 5;
//         throw 'error';
//     }
// ).then(
//     d => console.log(d * 3),
//     // e => {
//     //     // console.log(e);
//     //     // throw 'error 1';
//     // }
// ).then(
//     d => console.log(d)
// ).catch(err => console.log('An error occured: ' + err));


// fetch('https://dummyjson.com/products/11351351', {
//     method: 'POST'
// }).then(
//     resp => {
//         console.log(resp);
//         if (resp.status === 200) {
//             return resp.json();
//         } else {
//             throw 'not a 200'
//         }
//     }
// ).then(data => {
//     console.log(data);
//     // document.getElementByID.innerHTML = data.title
// }).catch(err => console.log('Error='+err));



// async - await
// always returns a promise
const syncF = () => {
    console.log('sync function');
}

const asyncF = async () => {
    return 'output form asyncF';
    // throw 'an error';
}

const f = async () => {
    try {
        let v = await asyncF();
        console.log(v);
    } catch (e) {
        console.log(e);
    }
}

const f1 = async () => {
    try {
        let resp = await fetch('https://dummyjson.com/products/1');
        console.log(resp);
        let js = await resp.json();
        console.log(js);
        // document.getElementById('id') = js.title 
    } catch (e) {
        console.log(e);
    }
}


syncF();
console.log('after f');

// syncF();
// asyncF().then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.error(err)
// });
// console.log('after sync');


// await keyword can be used only inside a async
// awit keywork makes an async operation sync



// promise chaining
// catch in promise
// spread operator

// async - await
// fetch
// objects
