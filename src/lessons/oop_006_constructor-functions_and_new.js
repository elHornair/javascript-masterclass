/*
 * Constructor function:
 * - Allows us to create a new instance (a copy according to a blueprint) of
 *   something
 * - "newable objects": objects that can be created with new Foo()
 * - Functions are objects in JS, so we can set properties on the
 *   constructor function
 *   Set stuff to be shared across all instances: e.g. Foo.prototype.name='me'
 */

// constructor function (uppercase by convention)
function Cart(items = []) {
  /*
   * - here we are creating props on our Cart object (local props)
   * - these are COPIED for every instance of Cart => fine for props, but not
   *   for methods (otherwise we create a lot of data, because they are copied
   *   for every instance, even though they're the same)
   */
  this.items = Object.freeze(items);
}

// these are shared accross all instances! 🎉
Cart.prototype.add = function (item) {
  // don't use arrow functions as methods because "this" would not refer to the
  // object!
  const state = [...this.items, item];
  this.items = Object.freeze(state);
};

Cart.prototype.remove = function (id) {
  const state = this.items.filter((item) => item.id !== id);
  this.items = Object.freeze(state);
};

const cart = new Cart(); // instanciate a new Cart
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };
cart.add(hotdog);

console.log(cart);
console.log(cart instanceof Cart); // => true
