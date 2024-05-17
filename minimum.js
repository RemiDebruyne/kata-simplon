// # Minimum

// Write a function min that takes two arguments and returns their minimum.

// ```
// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10

// ```

//Technically useless answer since Math.min() is already a function.

function findMinNumber(...parameter) {
  result = Math.min(...parameter);
  return result;
}

findMinNumber(-8, 2, 3, 6);
console.log(result);

//This was the expected answer
function minNumber(a, b) {
  if (a > b) {
    return b;
  } else {
    return a;
  }
}
