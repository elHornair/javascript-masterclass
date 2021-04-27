/*
 * Setters and getters:
 * - Getter: reading; Setter: writing
 * - Defined with the "set" and "get" keyword, followed by the name of the
 *   "virtual property"
 * - Inside the setters and getters, we can do whatever we want
 * - The cool thing: from the outside, they are used like normal props - JS will
 *   call the respective methods automagically🪄
 */

class Cart {
  #items; // private members

  constructor(items = []) {
    this.value = items;
  }

  // the old way to get data
  getCount() {
    return this.value.length;
  }

  // the new way to get data
  get count() {
    return this.value.length;
  }

  /*
   * Now comes the really cool part: we can centrally control the access to our
   * #items property - So instead of having Object.freeze() calls all over the
   * place, we just do it here
   */
  set value(items) {
    this.#items = Object.freeze(items);
  }

  get value() {
    // not sure why we have to freeze here? it's already frozen in the setter...
    return Object.freeze(this.#items);
  }

  add(item) {
    // setter and getter function are called automatically
    this.value = [...this.value, item];
  }

  remove(id) {
    // setter and getter function are called automatically
    this.value = this.value.filter((item) => item.id !== id);
  }
}

const myCart = new Cart();

myCart.add({ id: '🌭', name: 'Posh Dog', price: 399 });
myCart.add({ id: '🍔', name: 'Happy Burger', price: 499 });

console.log(myCart.getCount()); // using the old way
console.log(myCart.count); // using the getter

console.log(myCart);
// console.log(myCart.#items);// => error - it's a private property
console.log(myCart.value); // we can access it in a controlled way though
myCart.value.push({ id: '💩', name: 'Mallorys burger', price: -999 }); // => error (it's frozen)
