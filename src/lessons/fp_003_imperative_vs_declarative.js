/**
 * - Traditionally (before ES2015), JS development has been very imperative
 *   (mindset, but also because of lack of efficient helpers)
 * - This changed a lot in recent years => Declarative is the favoured way
 *   today, especially with modern JS frameworks
 * - Imperative: What things DO
 * - Declarative: What things ARE
 */

const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

// Calculate total: imperative approach
let totalImperative = 0;

for (let i = 0; i < items.length; i++) {
  totalImperative += items[i].price;
}

console.log(totalImperative);

// Calculate total: declarative approach (using chaining of array functions)
const totalDeclarative = items
  .map((item) => item.price)
  .reduce((prev, curr) => prev + curr);

console.log(totalDeclarative);
