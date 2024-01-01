type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  if (!nums.length) return init;

  let accum = init;

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i]);
  }

  return accum;
  
  // optimized solution?
  // return nums.reduce(fn, init);
};

// const result = reduce([1, 2, 3, 4, 5], (accum, curr) => accum + curr, 0);
const result = reduce(
  [1, 2, 3, 4],
  (accum, curr) => accum + curr * curr,
  100
)
console.log(result); // 15, 130
