/*
 * Object literals and encapsulation:
 * - Object literals are one way to encapsulate data (other ways: classes,
 *   functions, ...)
 * - OOP: data and behaviour in the same place (props & methods) => self
 *   containment
 * - OOP: main question: What ARE the things?
 * - Inside the object, use "this" to refer to the object itself
 * - IDE can help us with autocomplete for props/methods
 *
 * => Think about state management first!
 */

// object literal with encapsulated data
const cart = {
  items: [],
  add(item) {
    this.items.push(item);
  },
  remove(id) {
    const index = this.items.findIndex((x) => x.id === id);
    this.items.splice(index, 1);
  },
};

const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };

cart.add(hotdog);
console.log(cart);

setTimeout(() => {
  cart.remove('🌭');
  console.log(cart);
}, 2500);
// => One problem remains: because objects are passed by reference, and our
//    program is mutating data, the first log will have an object with an empty
//    items array -> We can quickly run into hard to debug problems
