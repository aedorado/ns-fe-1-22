// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String 

let s = "abc";
let s1 = 'this is a string in double quotes';
// console.log(typeof s);
// console.log(typeof s1);
// console.log(s == s1);   // compare content
// console.log(s === s1);  // compare data type & content
let sobj = new String('abc');
// console.log(typeof sobj);
// console.log(s == sobj);
// console.log(s === sobj);

// template strings;

// let ts = `this is a template string`;
let name = 'A';
// let a = [10, 20, 30]
// let ts = `I am ${a[2]} years old.`;
// console.log(ts);
        //-7654321
let str = "xyz abc";
    //     0123456
// console.log(str.slice(-5, -2));   // excludes the 5
// console.log(str.slice(4));   // start from pos 4 & go upto end
// console.log(str.slice(-5));   // last 5 characters
// console.log(str.slice(2, 5));   // excludes the 5
// console.log(str.slice(-5, 2));   // no output

// console.log(str.substring(0, 3));   // startindex, endindex
// console.log(str.substr(1, 4));      // startindex, no_of_char
// console.log(str.substr(-5));        // no_of_char from end of string

let text = "I,am in,Newton,Newton!";
// console.log(text.replace("/Newton/g", "Einstein"));
// // Regular Expression is used for pattern matching
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());
// console.log(text.concat(" Hurray!"));
// console.log("           H e l l o       ".trim());
// console.log("some string".padEnd(24, " end "));
// console.log("some string".padStart(24, "!>"));

// console.log(text[3]);
// console.log(text.split("").reverse().join(""));

// let a = ["I", "am", "good"];
// console.log(a.join(" "));

// console.log(str.length);
// for (let i = 0; i < str.length; ++i) {
//     console.log(str.charAt(i));
// }

let t = "this string";
// console.log(t.split(''));
// console.log(t.split('').reverse());
// console.log(t.split('').reverse().join(""));
// console.log(t.split('').sort().join(""));

let sl = "this is a longer string than ususal longer";
// console.log(sl.indexOf("longer"));
// console.log(sl.indexOf("zab"));
// console.log(sl.indexOf("longer", 15));
// console.log(sl.lastIndexOf("than"));
// console.log(sl.lastIndexOf("you"));
console.log(sl.search("longer"));

console.log(sl.startsWith("is "));
console.log(sl.endsWith("is "));
console.log(sl.endsWith('longer'));


// search - cannot take 2nd positoin parameter
// indexOf - cannot search using regex


