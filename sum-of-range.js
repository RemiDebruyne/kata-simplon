// # The sum of a range

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// ```
// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]

// console.log(sum(range(1, 10)));
// // → 55
// ```

// function range(start, end) {
//   let arr = [];
//   for (let i = start; i <= end; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(range(1, 10));

//steps = 1 makes the default value one, so the third expression of the for loop is equivalent to i++ in case of missing parameters
function range(start, end, steps = 1) {
  let arr = [];
  for (let i = start; i <= end; i += steps) {
    arr.push(i);
  }
  return arr;
}

console.log(range(1, 10));

function sum(start, end) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

console.log(sum(1, 10));
