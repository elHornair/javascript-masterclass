/*
 * Currying
 * - A curry is a higher order function that allows us to call a function with
 *   several arguments one by one (instead of all at once)
 * - Example: instead of f(a,b), we want to call f(a)(b)
 * - The curry doesn't call the function, it just transforms it
 * - After currying a function, we can still call it the original way if needed
 *
 * Partial application
 * - Means, that we are partially applying our curried function (i.e. only
 *   passing it some arguments, not all)
 * - Thus we get back a function with some arguments already applied. The
 *   function is ready for us to be called with the remaining arguments)
 */
const items = Object.freeze([
  { id: '🍔', name: 'Super Burger', price: 399 },
  { id: '🍟', name: 'Jumbo Fries', price: 199 },
  { id: '🥤', name: 'Big Slurp', price: 299 },
]);

const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      // the function is called as f(a,b), so we execute it
      return fn.apply(null, args);
    }

    // the function is called as f(a)(b), so we just prepare another function
    return curry(fn.bind(null, ...args)); // we're spreading args, because "bind" doesn't want an array

    // NOTE: we wrap the bound function in a curry again, so the remaining
    // arguments can be partially applied too if desired (otherwise the
    // arguments could only be applied in two steps - now it's infinite steps)
  };
};

const getNameFromId = curry(
  (id, items) => items.find((item) => item.id === id).name
);

const getFries = getNameFromId('🍟', items); // full application
console.log(getFries);

const getBurger = getNameFromId('🍔'); // partial application
console.log(getBurger(items)); // applying the second argument

// partial application, then immediately applying the second argument
const getBurger2 = getNameFromId('🍔')(items);
console.log(getBurger2);

// this is just to demo that it would also work with three steps
const getSlurp = getNameFromId()('🥤', items);
console.log(getSlurp);

const getSlurp2 = getNameFromId()('🥤')(items);
console.log(getSlurp2);
