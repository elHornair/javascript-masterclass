/*
 * Closures
 * - With every function we declare, a closure is created
 * - The closure gives us access to the outer functions scope (even after the
 *   outer function has returned)
 */
const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

const getNameFromId = (id) => {
  // higher order function -> returns a new function
  return (items) => {
    // we're in a closure here, so we can still access "id"
    return items.find((item) => item.id === id).name;
  };
};

const getFries = getNameFromId('🍟');
console.log(getFries(items));

/*
 * the cool thing with this is, that we could now use "getFries" on several
 * other arrays, without repeating '🍟' over and over again
 */
// console.log(getFries(anotherArray));
// console.log(getFries(yetAnotherOne));
// console.log(getFries([]));

/*
 * We could also use the higher order function to create a different function
 */
const getBurger = getNameFromId('🍔');
console.log(getBurger(items));
