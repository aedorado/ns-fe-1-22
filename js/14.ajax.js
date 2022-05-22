// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

let obj = [{
    x: 10, y: 20
}, { x:5, y:9 }];

let s = JSON.stringify(obj);
// {"x":10,"y":20,"name":"Anurag"}
// console.log(s);
let parsedObj = JSON.parse(s);
// console.log(parsedObj)


// AJAX - Asynchronous Javascipt & XML
// read data from server without reloading your page
// send data to the web server in the bg

// combination of XMLHttpRequest object in BOM
// javascript & DOM


document.getElementById('loader').addEventListener('click', function() {
    const xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === XMLHttpRequest.DONE) {
            console.log(`ReadyState = ${xhttp.readyState}`);
            let status = xhttp.status;
            console.log(status);
            if (status === 200) {
                let data = JSON.parse(xhttp.responseText);
                console.log(data);
                document.getElementById('title').innerText = data.title;
                let pimg = document.getElementById('product-img');
                pimg.setAttribute('src', data.thumbnail);
                pimg.style.display = 'block';
            } else if (status === 404) {
                document.getElementById('error').innerHTML = 'Data not found!';
            }
        }
    }

    let userInput = document.getElementById('input-id').value;
    let url = `https://dummyjson.com/products/${userInput}`;
    console.log(`URL = ${url}`);
    xhttp.open('GET', url);

    xhttp.send();
});






