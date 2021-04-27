/*
 * Recursion:
 * - A function calling itself
 * - Used e.g. when repeatedly performing the same calculation with different
 *   parameters where the result of one calculation feeds into the next
 *   calculation
 * - Recursive functions are pure functions
 * - Example: fibonacci, factorial, ...
 */

// factorial calculated with for loop
const factLoop = (x) => {
  if (x < 0) return undefined;

  let product = 1;

  for (let i = 1; i <= x; i++) {
    product *= i;
  }

  return product;
};

console.log(factLoop(3) === 6);
console.log(factLoop(5) === 120);
console.log(factLoop(6) === 720);
console.log(factLoop(1) === 1);
console.log(factLoop(0) === 1);
console.log(factLoop(-1) === undefined);
console.log(factLoop(-100) === undefined);

// factorial calculated with recursion
const factRec = (x) => (x < 0 ? undefined : x > 1 ? x * factRec(x - 1) : 1);

console.log(factRec(3) === 6);
console.log(factRec(5) === 120);
console.log(factRec(6) === 720);
console.log(factRec(1) === 1);
console.log(factRec(0) === 1);
console.log(factRec(-1) === undefined);
console.log(factRec(-100) === undefined);

// => observation: with the recursive approach we don't need to track any state
