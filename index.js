const lodash = require("lodash");
const array = require("lodash/array");

const arr = [3, 9, 9, 1, 0, 11, 93, 87, 1, 0, -30];

console.log(array.compact(arr));
console.log(array.reverse(arr));
console.log(array.chunk(arr));
console.log(array.concat(arr));
console.log(array.fill(arr, 4));