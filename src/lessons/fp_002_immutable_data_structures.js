/**
 * - There is no right or wrong - Mutable operations are fine if the project has
 *   decided to use them
 * - Immutability can help avoiding bugs, because it prevents side effects
 * - Makes state management a lot easier (e.g. in Angular / React), because
 *   the changes are easier to detect.
 * - Very popular in the JS world in recent years
 */
const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

const newItem = { id: '🌭', name: 'Posh Dog', price: 299 };

// array: add
// items.push(newItem); // mutable way
// const newItems = [...items, newItem]; // immutable way

// array: remove item
// items.splice(0, 1); // mutable way
const newItems = [items.filter((item) => item.id !== '🍔')]; // immutable way

// object: add
// newItem.price = 666; // mutable way
const newItemWithUpdatedPrice = { ...newItem, price: 999 }; // immutable way

// object: remove
// delete newItem.price; // mutable way
const { price: priceRemoved, ...newItemWithoutPrice } = newItem; // immutable way

console.log(items);
console.log(newItems);
console.log(newItem);
console.log(newItemWithUpdatedPrice);
console.log(priceRemoved);
console.log(newItemWithoutPrice);
