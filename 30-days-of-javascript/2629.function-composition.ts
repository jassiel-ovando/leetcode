/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

type F = (x: number) => number;

function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: number) => x;
  }
  
  return function(x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }

    return x;
  }
};

// const fn = compose([x => x + 1, x => 2 * x]); // x = 4 --> 9
// const fn = compose([x => x + 1, x => x * x, x => 2 * x]); // x = 4 --> 65
const fn = compose([]); // x = 4 --> 4
console.log(fn(4));
