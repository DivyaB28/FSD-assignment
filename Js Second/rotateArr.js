const rotateArrNtimes = ({ arrArgs = [], N = 0 }) => {
  if (arrArgs.length === N && N === 0) {
    return arrArgs;
  }
  N = N % arrArgs.length;
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  reverse(arrArgs, 0, arrArgs.length - 1);
  reverse(arrArgs, 0, N - 1);
  reverse(arrArgs, N, arrArgs.length - 1);
  return arrArgs;
};

console.log(rotateArrNtimes({ arrArgs: [1, 2, 3, 4, 5], N: 22 }));
rotateArrNtimes({ arrArgs: [1, 2, 3, 4, 5], N: 20 });
