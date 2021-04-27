/*
 * Factory function:
 * - Constructs and returns a new object
 * - Factory function in JS: no need for the "new" keyword -> object literals
 */

// factory function
const createCart = (items = []) => {
  return {
    items, // verbose way: "items: items" -> not needed, because name matches
    add(item) {
      this.items.push(item);
    },
    remove(id) {
      const index = this.items.findIndex((x) => x.id === id);
      this.items.splice(index, 1);
    },
  };
};

const cart = createCart(); // we could easily create several carts now
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };

cart.add(hotdog);
console.log(cart);

// problem: we can still mutate the internal props from outside
cart.items.splice(0, 1);
console.log(cart);
