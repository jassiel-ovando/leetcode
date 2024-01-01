type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// const result = argumentsLength(1, 2, 3); // 3
// const result = argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 10
const result = argumentsLength(); // 0
console.log(result);

