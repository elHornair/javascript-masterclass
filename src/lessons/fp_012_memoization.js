/*
 * Memoization:
 * - A way to cache the results of a function call
 * - Useful if the function call is very heavy
 */

const fact = (x) => (x < 0 ? undefined : x > 1 ? x * fact(x - 1) : 1);

const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    /*
     * - This is a closure that knows the original function and just waits for
     *   the args to apply to it
     * - JSON.stringify is a good way to create keys because it avoids
     *   collisions
     * - It makes sense to use the function arguments as the cache key, because
     *   in a pure function, the same arguments will lead to the same result
     */
    const key = JSON.stringify(args);

    if (!(key in cache)) {
      cache[key] = fn.apply(null, args);
    }

    return cache[key];
  };
};

const memoizedFactorial = memoize(fact);

console.log(memoizedFactorial(9)); // this is calculated
console.log(memoizedFactorial(6)); // this is calculated
console.log(memoizedFactorial(9)); // this is taken from the cache
