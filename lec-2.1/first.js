// function square(a) {
//     return a * a;
// }

// function cube(a) {
//     return a * a * a;
// }

// // function sumOfSquares(a, b) {
// //     return square(a) + square(b);
// // }

// // function sumOfCubes(a, b) {
// //     return cube(a) + cube(b);
// // }

// function sumOfGeneric(a, b, fn) {
//     return fn(a) + fn(b);
// }

// let ans = sumOfGeneric(1, 2, cube);
// console.log(ans);

// const fs = require("fs");

// let a = 1;
// console.log(a);

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     console.log(data);
// });

// let ans = 0;
// for(let i = 0; i < 100; i++) {
//     ans += i;
// }

// console.log(ans);

function promisifiedFunction(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });

    return p;
}

let ans = promisifiedFunction(1000);
console.log(ans);