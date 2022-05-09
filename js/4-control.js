// if (cond) { // true statements }
// else (cond1) { // else statements 1 }
// else (cond2) { // else statements 2  }
// else { // else statements 3 }

let time = 23;
// 0-11 -> good morning
// 12-18 -> good afternoon
// 19-23 -> good evening

// if (time < 12) {
//     console.log("good morning");
// } else if (time < 19) {
//     console.log("good afternoon");
// } else {
//     console.log("good evening");
// }


// switch (key) {
//     case value:
//         // body
//         break;
//     case value:
//         // body
//         break;
//     default:
//         // body
// }

// let day = "1";
// switch (day) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     default:
//         console.log("other day");
//                 // break;
//     // 0 -> sunday
//     // 1 -> monday
//     // 2-6 -> other day
// }


// for (init; cond; update) { body }
// while (cond) { body & update; }
// do { body & update; } while (cond)
// for in
// for of

// for (let i = 0; i < 20; i += 4) {
//     console.log(i);
// }

// let i = 0;
// while (i < 10) {
//     i++;
//     if (i % 3 == 0) {
//         console.log(i);
//     }
// }

let a = [100, 105, 110, 115, 120, 125, 130, 135];
    //   0      1     2    3   4    5   6   7

// for (let i = 1; i <= a.length; i += 2) {   // 1 -> 3 -> 5 -> 7 -> 9
//     console.log(a[i-1]);            // a[0]     a[2]    a[4]
//     if (i > a.length / 2) break;    // i>(8/2) -> false false true
// }

// for of
let fruits = ["Apple", "Orange", "Banana", "Melon"]
for (let f of fruits) {
    console.log(f);
}





// console.log(a.length);
for (let i = 1; i <= a.length; i += 2) {    // 1 -> 3 -> 5 -> 7 -> 9 loop exits
    // console.log(a[i-1]);    // a[1-1]->a[0]  a[3-1]->a[2]   a[5-1]=a[4] ...
    // a[0]->100    a[2]->110   a[4]->120   a[6]->130   i=8 i<8=8<8->false
}






