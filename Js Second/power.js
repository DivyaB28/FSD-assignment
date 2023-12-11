// Write a function power that takes a base and returns a function.
// The returned function,when invoked with an exponent,
// should calculate and return the result of the base raised to that exponent.
// Use memoization to optimize repeated calculations.

function power(base) {
  let cache = {};
  function calculateRaisedToPower(exponent) {
    let result;
    if (exponent in cache) {
      console.log("found in cache ");
      result = cache[exponent];
    }
    if (exponent === 0) {
      result = 1;
    } else {
      result = base * calculateRaisedToPower(exponent - 1);
    }

    cache[exponent] = result;
    return result;
  }
  return calculateRaisedToPower;
}
let base2 = power(2);

console.log(base2(3));
console.log(base2(5));
console.log(base2(3));
console.log(base2(9));
console.log(base2(5));
