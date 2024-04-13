// Brute force

// const slidingWindow = function (array, k) {
//     let min = Infinity
//     for(let i = 0; i <= array.length -k   1; i++) {
//         const window = array.slice(i, i + k);
//         const sum = window.reduce((a, b) => a + b, 0)
//         min = Math.min(min, sum)
//     }
//     return min
// }

// const array = [-2, 10, 1, 3, 2, -1, 4, 5];
// const k = 3;

// console.log(slidingWindow(array, k));

// sliding window

const slidingWindow = function (array, k) {
    let min = Infinity
    let sum = 0;
    for ( let j = 0; j<=k-1; j++) {
        sum+= array[j];
    }

    min = Math.min(sum, min)

    for(let i = 1; i <= array.length - k-1; i++) {
        sum -= array[i-1]
        sum += array[i+k-1]
        min = Math.min(min, sum)
    }
    return min
}

const array = [-2, 10, 1, 3, 2, -1, 4, 5];
const k = 3;

console.log(slidingWindow(array, k));
