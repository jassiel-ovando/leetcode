type P = Promise<number>


async function addTwoPromises(promise1: P, promise2: P): P {
  // 'await' pauses the execution of the function until the promise is resolved
  // 'Promise.all' is used to wait for multiple promises
  // 'Promise.all' returns an array of the resolved values
  // the name of consts are assigned respectively promise1 and promise2
  // by destructuring both arrays

  const [a, b] = await Promise.all([promise1, promise2]);
  return a + b;
}

const promise1: P = new Promise(resolve => setTimeout(() => resolve(2), 20)) // 20ms
const promise2: P = new Promise(resolve => setTimeout(() => resolve(5), 60)) // 60ms

addTwoPromises(promise1, promise2)
  .then(console.log); // 7