type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
}

function expect(val: any): ToBeOrNotToBe {
  const throwError = (errorStr) => { throw new Error(errorStr); }
  return {
    toBe: (expected: any) => val === expected || throwError('Not Equal'),
    notToBe: (expected: any) => val !== expected || throwError('Equal'),
  };
};