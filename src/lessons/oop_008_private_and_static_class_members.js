/*
 * Private and static class members
 */

class Cart {
  static name = 'SuperCart'; // static members

  #items; // private members

  constructor(items = []) {
    this.#items = Object.freeze(items);
  }

  add(item) {
    const state = [...this.#items, item];
    this.#items = Object.freeze(state);
  }

  remove(id) {
    const state = this.#items.filter((item) => item.id !== id);
    this.#items = Object.freeze(state);
  }
}

const myCart = new Cart();
const hotdog = { id: '🌭', name: 'Posh Dog', price: 399 };
myCart.add(hotdog);

// static properties
console.log(Cart.name); // static property exists on the Class
console.log(myCart.name); // static property doesn't exist on the instance

// private properties
console.log(myCart); // "items" are nowhere to be seen
console.log(myCart.items); // => undefined
