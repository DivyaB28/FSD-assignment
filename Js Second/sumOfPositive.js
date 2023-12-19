// Implement a function that takes an array of numbers and
//returns the sum of all positive numbers in the array.

const sumOfPositive = (arrArg = []) => {
  let sum = 0;
  arrArg.forEach((ele) => {
    sum += ele > 0 ? ele : 0;
  });
  return sum;
};

console.log(sumOfPositive([0, -1, -2, 1, 2, 9]));
