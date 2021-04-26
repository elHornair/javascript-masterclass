/*
 * A higher order function (HOF) does at least one of the following:
 * 1. Return a new function
 * 2. Take other functions as arguments
 *
 * Side note: a callback is called a callback, because it is "called back" from
 * a HOF, to which it is passed as an argument
 *
 * HOFs allow us to write simple/readable code & to compose simple functions into
 * more complex programs
 */
const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

const getNameFromId = (id) => (items) =>
  items.find((item) => item.id === id).name;

const getFries = getNameFromId('🍟');
const getBurger = getNameFromId('🍔');

console.log(getFries(items));
console.log(getBurger(items));
