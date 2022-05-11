// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let d = new Date();

// console.log(d);
// console.log(d.toString());      // Time string in the local timezone
// console.log(d.toUTCString());   // UTC / GMT
// console.log(d.toISOString());   // ISO
// console.log(d.toLocaleDateString());    // Locale Date only

// d = new Date(0);
// console.log(d);
// d = new Date(10000);
// console.log(d);
// d = new Date(20000);
// console.log(d);
// d = new Date(60000);
// console.log(d);
// d = new Date(1652284732 * 1000);
// console.log(d.toString());

// let time = `Wed May 11 2022 21:29:00 GMT+0530 (India Standard Time)`;
// let time = 1652284861 * 1000;
// console.log(new Date(time));
// time += 1000;
// console.log(new Date(time));
// time += 60 * 60 * 1000;
// console.log(new Date(time));
// time += 30 * 24 * 60 * 60 * 1000;
// console.log(new Date(time).toString());
// time -= 365 * 24 * 60 * 60 * 1000;
// console.log(new Date(time).toString());

d = new Date(2022, 4);   // 0 -> Jan .. 4 -> May .. 11 -> Dec
// console.log(d);
// console.log(d.toString());

d = new Date('2022-05-11T21:35:54.120Z')
d1 = new Date('2021-05-11T21:35:54.120Z')

d1.setTime(2000);
console.log(d1);

// setDate() -> 1-31
// setHours() -> 0-23
// setMilliseconds() -> 0-999
// setMinutes() -> 0-59
// setMonth() -> 0-11
// setSeconds() -> 0-59
// setTime(s) -> s = milliseconds past epoch

if (d1 < d) {   // 
    console.log('D1 is before');
} else {
    console.log('D1 is after')
}


// console.log(d.toString());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log("Locla Date = ", d.getDate());
// console.log("UTC Date = ", d.getUTCDate());
// console.log(d.getTime());
// console.log("Local Day: ", d.getDay());
// console.log("UTC Day: ", d.getUTCDay());
// console.log(d.getMilliseconds());
// console.log(d.getSeconds());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getUTCHours());
// console.log(d.getUTCMinutes());



