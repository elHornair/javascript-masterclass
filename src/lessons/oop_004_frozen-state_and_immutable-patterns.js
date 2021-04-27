/*
 * Frozen state:
 * - We can use it to avoid mutation of our props in an undesired way ( in our
 *   example through anything else than the "add" or "remove" method)
 */

// factory function
const createCart = (items = []) => {
  return {
    items: Object.freeze(items), // freeze items
    add(item) {
      // add item in an immutable way
      const state = [...this.items, item];
      this.items = Object.freeze(state);
    },
    remove(id) {
      // remove item in an immutable way
      const state = this.items.filter((item) => item.id !== id);
      this.items = Object.freeze(state);
    },
  };
};

const cart = createCart();
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };

cart.add(hotdog);
console.log(cart);

// this would now lead to an error, because we are trying to mutate a frozen object
// cart.items.splice(0, 1);

console.log(Object.isFrozen(cart.items)); // nice helper

// Problem: we can still override the property itself (this isn't a mutation!)
cart.items = [];
console.log(cart);
