/*
 * Classes:
 * - Syntactic sugar => conceptually, everything works the same way as with the
 *   old fashioned constructor functions
 * - Available since ES2015
 */

// the class block, wrapping everything
class Cart {
  // props
  items; // not mandatory, but best practice, to define them here

  // the actual constructor
  constructor(items = []) {
    this.items = Object.freeze(items);
  }

  // methods (these will still be written on the prototype - we just don't need
  // to type it out manually anymore)
  add(item) {
    const state = [...this.items, item];
    this.items = Object.freeze(state);
  }

  remove(id) {
    const state = this.items.filter((item) => item.id !== id);
    this.items = Object.freeze(state);
  }
}

const cart = new Cart();
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };
cart.add(hotdog);

console.log(cart);
