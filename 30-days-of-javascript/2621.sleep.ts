async function sleep(millis: number): Promise<void> {
  if (millis <= 0) { // check that the duration is positive
    return;
  }
  // the purpose of resolve is to 'resolve' the promise
  // to change its state from pending to fulfilled? ig
  return new Promise(resolve => setTimeout(resolve, millis));
}


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */