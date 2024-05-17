// # Minimum

// Write a function min that takes two arguments and returns their minimum.

// ```
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// ```

function findMinNumber(...parameter) {
  result = Math.min(...parameter);
  return result;
}

findMinNumber(-8, 2, 3, 6);
console.log(result);
