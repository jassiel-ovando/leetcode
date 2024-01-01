type Fn = (...params: number[]) => number

// memoization = fancy word for hashing
function memoize(fn: Fn): Fn {
  // const cache must be a Record<string, number>
  // because the key is a string and the value is a number, if not specified,
  // it will be Record<string, any>
  const cache: Record<string, number> = {}
  // cache needed to store the result of the function
  // and return the result if the function is called again with the same arguments
  console.log(`cache: ${cache}`)

  return function(...args) { // args is an array of numbers
    // JSON.stringify converts an array into a string
    // [1, 2, 3] => "[1,2,3]"
    // key returns the args as a string
    const key = JSON.stringify(args)
    console.log(`args: ${args}`)
    console.log(`key: ${key}`)

    console.log(`cache[key]: ${cache[key]}`)
    console.log(`key in cache: ${key in cache}`)
    
    // returns undefined if the key is not in the cache
    // otherwise returns the value of the key
    // it differs from the 'key in cache' for its boolean value
    // if (cache[key]) { 
    //   return cache[key]
    // } else {
    //   const result = fn(...args)
    //   cache[key] = result
    //   return result
    // }


    if (key in cache) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  }
}

// tests
console.log('Memoize start')

let callCount = 0;
const memoizedFn = memoize(
  function (a, b) {
    callCount += 1;
    return a + b;
  }
)


console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1