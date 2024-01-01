type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;

  // optimized solution?
  // return arr.filter(fn);

};

const result = filter([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0);
console.log(result); // [2, 4, 6]