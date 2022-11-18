"use strict";

//map
// const arr = [1, 3, 5, 11];
// const res = arr.map(v => v * 3);
// console.log(res);

//filter
// const n = [1, 3, 5, 10, 44, 89, 900];
// const res = n.filter(v => v > 30);
// console.log(res);

const find_longest_el = (arr) => {
    let max = arr[0].length;
    arr.map(e => max = Math.max(max, e.length));
    let res = arr.filter(e => e.length == max);
    return res;
    // console.log(res);
}

// const arr = ['z', 'zz', 'zzz', 'zzzz', 'zzzzz', 'ewrffrgthgfhfghdfg'];
const arr = ['code', 'canvas', 'javascript'];

console.log(find_longest_el(arr));
