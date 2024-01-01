function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
  // optimized solution?
  // return arr.map(fn);
};

const result = map([1, 2, 3, 4, 5], (n) => n * 2);
console.log(result); // [2, 4, 6, 8, 10]
