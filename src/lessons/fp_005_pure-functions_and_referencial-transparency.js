/**
 * Pure function:
 * 1. Referencial transparency
 *    - The function only depends on it's input (no access to external state)
 *    - This also means, that the same input will always lead to the same output
 * 2. No side effects
 *    - No reassigning an external variable, or updating an external object
 *    - No console.log, no DOM manipulation, ...
 *
 * => Basically a function in the mathematical sense
 */

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

// impure because:
// 1. we access the external "items" (no referencial transparency!)
// 2. we write to the DOM (side effect)
// const getTotalImpure = () => {
//   document.querySelector('#app').innerHTML = items.reduce(
//     (x, y) => x + y.price,
//     0
//   );
// };
// getTotalImpure();

const getTotalPure = (v) => v.reduce((x, y) => x + y.price, 0); // this is pure
document.querySelector('#app').innerHTML = getTotalPure(items);
