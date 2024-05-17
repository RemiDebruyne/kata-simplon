// # Josephus Problem

// Josephus problem is a math puzzle with a grim description:  `n`  prisoners are standing on a circle, sequentially numbered from  `1`  to  `n−1`.

// An executioner walks along the circle, starting from prisoner  0 , removing every  k -th prisoner and killing him.

// As the process goes on, the circle becomes smaller and smaller, until only one prisoner remains, who is then freed.

// For example, if there are `n=5` prisoners and `k=2`, the order the prisoners are killed in (let's call it the "killing sequence") will be 2, 4, 1, and 5, and the survivor will be #3.

// Given any `n,k>0`, find out which prisoner will be the final survivor.

// For example, there were 41 prisoners and every 3rd prisoner was being killed (`k=3`).

// Among them was a clever chap name Josephus who worked out the problem, stood at the surviving position, and lived on to tell the tale.

// Which number was he?

// `josephus(5,3)` should return `3`.
// `josephus(6,2)` should return `5`.
// `josephus(7,2)` should return `7`.
// `josephus(8,2)` should return `1`.
/* 

[1,2x,3,4x,5,6x,7]
[1x,3,5x,7] 
[3x,7]

[1,2,3x,4,5,6x,7,8,9x,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]
[1,2,3,4,5,6,7,8,9,10,11,12,13,14]

*/
function range(start, end, steps = 1) {
  let arr = [];
  for (let i = start; i <= end; i += steps) {
    arr.push(i);
  }
  return arr;
}
let prisoners = range(1, 41);

function josephus(arr, step, count = 0) {
  if (arr.length === 1) {
    return "fin " + arr;
  }

  for (let i = 0; i < arr.length; i++) {
    count++;
    // console.log("------------------------ boucle numéro " + i);
    // console.log("count = " + count);
    // console.log("We are at " + arr[i] + " for i = " + i);
    // console.log("array before splice " + arr);
    if (count === step) {
      count = 0;
      // console.log(arr[i] + " is gonna be removed");
      arr.splice(i, 1);
      // console.log("array after splice " + arr);
      i--;
      // console.log("We are now at " + arr[i] + " for i = " + i);
    }
  }

  return josephus(arr, step, count);
}

console.log(josephus(arr, 4));
