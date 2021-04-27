/*
 * Procedural programming:
 * - Probably how most of us started programming: a bunch of variables all over
 *   the place, state mutations, etc. -> No particular structure or organisation
 */

// example of "what not to do"
const cart = [];

const addToCart = (item) => {
  cart.push(item);
};

const removeFromCart = (id) => {
  const index = cart.findIndex((x) => x.id === id);
  cart.splice(index, 1);
};

const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };

addToCart(hotdog);
console.log(cart);

setTimeout(() => {
  removeFromCart('🌭');
  console.log(cart);
}, 2500);
